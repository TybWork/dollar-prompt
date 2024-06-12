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

// for seller

export const isSeller = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log(token)

        if (!token) {
            return res.status(401).json({ msg: "Unauthorized: Token not found" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        if (user.role !== "user") {
            return res.status(403).json({ msg: "Forbidden: Unverified user" });
        }

        // Store the user data in the request for further access
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", error: error });
    }

}