const { Donation, Product, Order, Post, User } = require('../models');
const dotenv = require('dotenv').config();
const { signToken, AuthenticationError } = require('../utils/auth');
// const stripe = require('stripe')(process.env.SECRET_KEY_STRIPE);

const resolvers = {
    Query: {
        users: async() => {
            return User.find();
        },

        profile: async(parent, { profileId }) => {
            return User.findOne({ _id: profileId });
        },

        user: async(parent, { userId }) => {
            return User.findOne({ _id: userId });
        },

        products: async() => {
            return Product.find();
        },

        product: async(_, { productId }) => {
            return Product.findOne({ _id: productId });
        },

        donations: async() => {
            return Donation.find();
        },

        donation: async(_, { donationId }) => {
            return Donation.findOne({ _id: donationId });
        },

        posts: async() => {
            return Post.find();
        },

        post: async(_, { postId }) => {
            return Post.findOne({ _id: postId });
        },

        order: async(_, { orderId }) => {
            return Order.findOne({ _id: orderId });
        },

        me: async(parent, args, context) => {
            if(context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError
        },

        checkout: async(_, args, context) => {
            const url = new URL(context.headers.referer).origin;
            await Order.create({ products: args.products.map(({ _id}) => _id)});
            const line_items = [];

            for(const product of args.products) {
                line_items.push({
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: product.name,
                            description: product.description,
                            images: [`${url}/images/shop-image/${product.image}`]
                        },
                        unit_amount: product.price * 100,
                    },
                    quantity: product.purchaseQuantity,
                })
            }
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`,
            });

            return { session: session.id };
        }
    },

    Mutation: {
        addUser: async(_, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { user, token };
        },
        updateUser: async(_, args, context) => {
            if(context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true});
            }

            throw AuthenticationError;
        },
        removeUser: async(_, { id }) => {
            try {
                const user = User.findByIdAndRemove(id, { new: true });
                return await user;
            } catch {
                throw console.error("No User Found");
            }
        },

        addPost: async(_, args) => {
            const post = await Post.create(args);
            return post;
        },
        removePost: async(_, { id }) => {
            try {
                return await Post.findByIdAndDelete(id);
            } catch {
                throw console.error("No Post Found");
            }
        },

        addComment: async(_, args) => {
            const comment = await Comment.create(args);
            return comment;
        },
        removeComment: async(_, { id }) => {
            try {
                return await Comment.findByIdAndDelete(id);
            } catch { 
                throw console.error("No Comment Found");
            }
        },

        addProduct: async(_, args) => {
            const product = await Product.create(args);
            return product;
        },
        updateProduct: async(_, args) => {
            try {
                return await Product.findByIdAndUpdate(_id, { $inc: { description: args.description, image: args.image, price: args.price, quantity: args.quantity}}, { new: true});
            } catch {
                throw console.error("No Product Found");
            }
        },
        removeProduct: async(_, { id }) => {
            try {
                return await Product.findByIdAndDelete(id);
            } catch {
                throw console.error("No Product Found");
            }
        },
        
        addDonation: async(_, args) => {
            const donation = await Donation.create(args);
            return donation;
        },
        removeDonation: async(_, { id }) => {
            try {
                return await Donation.findByIdAndDelete(id);
            } catch {
                throw console.error("No Donation Found");
            }
        },

        addOrder: async(_, { products }) => {
            const products_id = products.map((product) => product._id)
            const order = await Order.create({
                $addToSet: {
                    products: { $each: { products_id }}
                }
            });
            return order;
        },
        updateOrder: async(_, { products }) => {
            try {
                return await Order.findByIdAndUpdate(_id, { $addToSet: { products: products }}, { new: true});
            } catch {
                throw console.error("No Order Found");
            }
        },
        removeOrder: async(_, { id }) => {
            try { 
                return Order.findByIdAndDelete(id)
            } catch {
                throw console.error("No Order Found");
            }
        },

        login: async(_, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) throw AuthenticationError;

            const checkPW = await user.isCorrectPassword(password);
            if(!checkPW) throw AuthenticationError;

            const token = signToken(user);
            return { token, user };
        }
    }
};

module.exports = resolvers;