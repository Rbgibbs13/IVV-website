const db = require('../config/connection');
const { Product, User, Donation } = require('../models');
const userSeeds = require('./userSeeds.json');
const donationSeeds = require('./donationSeeds.json');
const productSeeds = require('./productSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try{
        await cleanDB('User', 'users');
        await cleanDB('Product', 'products');
        await cleanDB('Donation', 'donations');

        await User.create(userSeeds);
        await Product.create(productSeeds);
        await Donation.create(donationSeeds);

        console.log('Seeding completed!');
        process.exit(0);
    } catch(err) {
        throw err;
    }
});