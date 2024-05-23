import mongoose from 'mongoose';
const { Schema } = mongoose;
const dallePromptSchema = new Schema(
    {
        promptType: {
            type: String,
            enum: ["Dall-E", "GPT", "Leonardo Ai", "Llama", "Midjourney", "Stable Diffusion"],
            default: "Dall-E",
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            enum: [2.99, 3.99, 4.99, 5.99, 6.99],
            default: 2.99,
            required: true,
        },
        version: {
            type: String,
            enum: ["DALL-E 2", "DALL-E 3"],
            default: "DALL-E 2",
            required: true
        },
        describePrompt: {
            type: String,
            required: true,
        },
        // exampleImage: {
        //     type: [String],
        //     default: "https://www.google.com/imgres?q=prompts%20images&imgurl=https%3A%2F%2Fassets.prowritingaid.com%2Ff%2F145420%2F750x469%2F5c0099a8f9%2Fblog-title-fiction-writing-prompts.png&imgrefurl=https%3A%2F%2Fprowritingaid.com%2Ffiction-writing-prompts&docid=4gptoHxRnNFuKM&tbnid=NZuesii6nUUf1M&vet=12ahUKEwjX0NfljZyGAxXFhv0HHYrwC3kQM3oECGoQAA..i&w=750&h=469&hcb=2&ved=2ahUKEwjX0NfljZyGAxXFhv0HHYrwC3kQM3oECGoQAA",
        //     validate: {
        //         validator: function (arr) {
        //             return arr.length === 9
        //         },
        //         message: "Please upload 9 example images."
        //     },
        //     required: true
        // },
        // exampleImage: {
        //     type: [
        //         {
        //             img_URL: {
        //                 type: String,
        //                 // required: true,
        //             },
        //             img_Title: {
        //                 type: String,
        //                 // required: true,
        //             }
        //         },
        //     ],
        //     // required: true,
        //     validate: {
        //         validator: function (arr) {
        //             return arr.length === 9
        //         },
        //         message: "Please upload 9 example images."
        //     },
        // },
        promptInstruction: {
            type: String,
            required: true
        },
        country: {
            type: String,
            // required: true
        },
        getUser: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    }, { timestamps: true }
)

export const DallE = mongoose.model("DallE", dallePromptSchema)