import mongoose from "mongoose";


const prodcutSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    price:{
        type: Number,
        min:0,
        required: true
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    category:{
        type: String,
        required: true
    },
    isFeatured:{
        type: Boolean,
        default: false
    }

},{timestamps: true});

const product = mongoose.model("Product", prodcutSchema);

export default product;