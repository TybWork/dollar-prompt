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
        type: [String],
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
    following: {
        type: Number
    },
    followers: {
        type: Number
    },
    prompts: {
        type: [{}]
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

export const userProfile = mongoose.model("userProfile", userProfileSchema)