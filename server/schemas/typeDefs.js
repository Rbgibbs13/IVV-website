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

    type Category {
        _id: ID
        name: String
    }

    type Comment {
        _id: ID!
        userID: User
        comment: String
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
        amount: Float!
        purchaseDate: String
        description: String
    }

    type Post {
        _id: ID!
        title: String!
        text: String!
        image: String
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

        comment(_id: ID!): Comment
        comments: [Comment]

        order(_id: ID!): Order
        me: User

        checkout(products: [ProductInput]): Checkout
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String!, lastName: String!, userName: String!, email: String!, password: String!): User
        removeUser(_id: ID!): User

        addPost(title: String!, text: String!, image: String, published: Boolean, createdAt: String): Post
        removePost(_id: ID!): Post

        addComment(userID: Int!, comment: String!): Comment
        removeComment(_id: ID!): Comment

        addProduct(name: String!, description: String, image: String, price: Float!, quantity: Int!): Product
        updateProduct(_id: ID!, description: String, image: String, price: Float!, quantity: Int!): Product
        removeProduct(_id: ID!): Product

        addDonation(amount: Float!, purchaseDate: String, description: String): Donation
        removeDonation(_id: ID!): Donation

        addOrder(products: [ProductInput]): Order
        updateOrder(products: [ProductInput]): Order
        removeOrder(_id: ID!): Order

        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;