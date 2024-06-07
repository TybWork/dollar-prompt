import { User } from "../models/User/user.model.js"

// get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({ msg: 'Failed to get users' })
    }
}

export default getUsers;