const { Schema, model } = require('mongoose');

const donationSchema = new Schema({
    amount: {
        type: Number,
        required: true,
        min: 1.00,
    },
    purchaseDate: {
        type: Date,
        default: Date.now(),
    },
    description: {
        type: String,
        maxlength: 20,
    }
});

const Donation = model('Donation', donationSchema);
module.exports = Donation;