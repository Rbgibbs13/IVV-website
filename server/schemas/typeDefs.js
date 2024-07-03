const typeDefs = `
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        userName: String!
        email: String!
        password: String!
        orders: [Order]
    }

    type Product {
        _id: ID!
        name: String!
        description: String
        image: String
        price: Float!
        quantity: Int
        category: Category
    }

    type Donation {
        _id: ID!
        amount: Number!
        purchaseDate: String
        description: String
    }

    type Post {
        _id: ID!
        text: String
        published: Boolean
        createdAt: String
        comments: [Comment]
    }

    type Order {
        _id: ID!
        purchaseDate: String
        products: [Product]
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
        profile: User
    }

    input ProductInput {
        _id: ID
        purchaseQuantity: Int
        name: String
        image: String
        price: Float
        quantity: Int
        description: String
    }

    type Query {
        user(_id: ID!): User
        users: [User]

        profile(profileId: ID!): User

        product(_id: ID!): Product
        products: [Product]

        donation(_id: ID!): Donation
        donations: [Donation]

        post(_id: ID!): Post
        posts: [Post]

        order(_id: ID!): Order
        me: User

        checkout(products: [ProductInput]): Checkout
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!): User

        addPost(text: String!, published: Boolean, createdAt: String): Post
        removePost(_id: ID!): Post

        addProduct(name: String!, description: String, image: String, price: Float!, quantity: Int!): Product
        updateProduct(_id: ID!, description: String, image: String, price: Float!, quantity: Int!): Product
        removeProduct(_id: ID!): Product

        addDonation(amount: Float!, purchaseDate: String, description: String): Donation

        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;