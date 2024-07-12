import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $userName: String!, $password: String!, $email: String!) {
        addUser(firstName: $firstName, lastName: $lastName, userName: $userName, password: $password, email: $email) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_POST = gql`
    mutation addPost($title: String!, $text: String!, $image: String, $published: Boolean, $createdAt: String) {
        addPost(title: $title, text: $text, image: $image, published: $published, createdAt: $createdAt) {
            _id
            title
            text
            image
            published
            createdAt
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($userID: ID!, $comment: String!) {
        addComment(userID: $userID, comment: $comment) {
            _id
            comment
            userID {
                userName
            }
        }
    }
`;

export const ADD_DONATION = gql`
    mutation addDonation($amount: Number!, $description: String) {
        addDonation(amount: $amount, description: $description) {
            _id
            amount
            description
        }
    }
`

export const ADD_PRODUCT = gql`
    mutation addProduct($name: String!, $description: String, $image: String, $price: Float!, $quantity: Int!, $category: ID) {
        addProduct(name: $name, description: $description, image: $image, price: $price, quantity: $quantity, category: $category) {
            _id
            name
            description
            images
            price
            quantity
            category {
                name
            }
        }
    }
`;

export const ADD_ORDER = gql`
    mutation addOrder($products: [ID!]) {
        addOrder(products: $products) {
            _id
            purchaseDate
            products {
                name
                description
                image
                price
                quantity
                category {
                    name
                }
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($firstName: String!, $lastName: String!, $userName: String!, $password: String!, $email: String!) {
        updateUser(firstName: $firstName, lastName: $lastName, userName: $userName, password: $password, email: $email) {
            token
            user {
                _id
            }
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation updateProduct($name: String!, $description: String, $image: String, $price: Float!, $quantity: Int!, $category: ID) {
        updateProduct(name: $name, description: $description, image: $image, quantity: $quantity, category: $category) {
            _id
            description
            image
            price
            quantity
            category
        }
    }
`;

export const UPDATE_ORDER = gql`
    mutation updateOrder($products: [ID!]) {
        updateOrder(products: $products) {
            _id
            purchaseDate
            products
        }
    }
`;