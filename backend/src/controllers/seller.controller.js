import mongoose from "mongoose";
import { SellerProfile } from "../models/SellerProfile/sellerProfile.model.js";
import { User } from "../models/User/user.model.js";
import { cloudinaryFunc } from "../utils/cloudinary.utils.js";
import fs from 'fs';

export const postSellerData = async (req, res) => {
    try {
        // cloudinary setup
        const urls = [];
        for (const file of req.files) {
            const url = await cloudinaryFunc(file);
            urls.push(url);

            // Delete the file from the server
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                } else {
                    console.log('File deleted successfully');
                }
            });
        }

        // ...............
        const newSeller = new SellerProfile({
            ...req.body,
            profileBanner: urls[0], // Assuming first image as profile banner
            profileImage: urls[1],
            userId: req.userId,
        })
        const savedSeller = await newSeller.save()

        // change the role of user when he becomes seller
        const userIdObject = new mongoose.Types.ObjectId(req.userId);
        await User.findByIdAndUpdate(userIdObject, { role: "seller" });

        return res.status(200).json(savedSeller);
    } catch (error) {
        return res.status(500).json({ msg: `Failed to create new seller ${error}` })
    }
};
