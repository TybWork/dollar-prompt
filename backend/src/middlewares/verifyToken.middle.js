import jwt from 'jsonwebtoken'
import { User } from '../models/User/user.model.js';
export const isAdmin = async (req, res, next) => {
    try {
        const token = await req.cookies.token;

        if (!token) {
            return res.status(400).json({ msg: "Unathorized: You don't have token" })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decode.userId)

        if (!user) {
            return res.status(400).json({ msg: "User not found" })
        }

        if (user.role !== "admin") {
            return res.status(400).json({ msg: "Unathorized: User is not admin!" })
        }

        req.user = user

        next();
    } catch (error) {
        return res.status(400).json(error)
    }
}