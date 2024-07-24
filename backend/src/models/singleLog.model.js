import mongoose from "mongoose";
const { Schema } = mongoose;

const singleLog = new Schema({
    title: {
        type: String,
    },
    price: {
        type: Number
    },
    status: {
        type: String,
        default: "0"
    }
})

export const ProductLog = mongoose.model('ProductLog', singleLog);