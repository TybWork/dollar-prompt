// import { User } from "../models/user.model.js";
import { User } from "../models/User/user.model.js";

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// create user
export const signUp = async (req, res) => {
    const { firstName, lastName, gender, role, email, password } = req.body;

    try {
        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).json({ msg: "User already exist!!" })
        }

        const hashedPassword = bcrypt.hashSync(password, 10)

        const user = new User({
            firstName,
            lastName,
            gender,
            role,
            email,
            password: hashedPassword
        })

        await user.save()
        return res.status(200).json({ msg: "user has been created successfully", user })

    } catch (error) {
        return res.status(400).json({ msg: `Failed to create a new user ${error}` })
    }
}

// login user
export const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: "No such user!!" })
        }

        const compare = bcrypt.compareSync(password, user.password)
        if (!compare) {
            return res.status(400).json({ msg: "Password not matched!!" })
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            // sameSite: "Strict",
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.status(200).json({ msg: "User loged in successfully!!", user, token })

    } catch (error) {
        console.log(`User log in failed ${error}`)
    }
}