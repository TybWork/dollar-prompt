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

        const user = new User.create({
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

        const token = jwt.sign({ userId: user._id, userRole: user.role }, process.env.JWT_SECRET)

        res.cookie('token', token, {
            httpOnly: false,
            secure: false,
            sameSite: 'None',
        });


        return res.status(200).json({ msg: "User loged in successfully!!", user, token })

    } catch (error) {
        console.log(`User log in failed ${error}`)
    }
}

// controller for clear cookie route
export const clearCookie = async (req, res) => {
    const cookieName = 'token';
    res.clearCookie(cookieName);
    return res.status(200).json({ msg: `cookie ${cookieName} deleted successfully!` })

}

// controller for refreshig cookie
export const refreshCookie = async (req, res) => {
    const { userId, userRole } = req.body;

    try {
        const newToken = jwt.sign({ userId, userRole }, process.env.JWT_SECRET)

        res.cookie('token', newToken, {
            httpOnly: false,
            secure: false,
            sameSite: "None"
        })

        return res.status(200).json({ msg: 'Cookie refreshed successfully!!', newToken })
    } catch (error) {
        return res.status(400).json({
            msg: `Failed to refresh cookie ${error}`
        })
    }
}
