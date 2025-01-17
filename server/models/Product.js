const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        maxlength: 250,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        min: 0.99,
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    }
});

const Product = model('Product', productSchema);
module.exports = Product;