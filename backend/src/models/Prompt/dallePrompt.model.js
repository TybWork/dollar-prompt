import mongoose from "mongoose";
const { Schema } = mongoose;

const dalleSchema = new Schema(
    {
        promptType: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        estimatedPrice: {
            type: String,
            required: true,
        },
        version: {
            type: String,
            required: true,
        },
        prompt: {
            type: String,
            required: true,
        },
        image: {
            type: string,
            required: true,
        },
        promptInstruction: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    }, { timestamps: true }
)

export const Dalle = mongoose.model("Dalle", dalleSchema);