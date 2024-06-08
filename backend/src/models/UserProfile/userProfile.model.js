import mongoose from 'mongoose';
const { Schema } = mongoose;

const userProfileSchema = new Schema({
    banner: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    profileLink: {
        type: String,
    },
    profileDescription: {
        type: String,
        required: true
    },
    views: {
        type: Number,
    },
    likes: {
        type: Number,
    },
    rank: {
        type: Number,
    },
    joinedAt: {
        type: new Date().toLocaleString
    },
    following: {
        type: Number
    },
    followers: {
        type: Number
    },
    prompts: {
        type: [{}]
    }
})

export const userProfile = mongoose.model("userProfile", userProfileSchema)