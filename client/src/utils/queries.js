import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query allProducts {
        products {
            _id
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
`;

export const QUERY_SINGLE_PRODUCT = gql`
    query singleProduct($productID: ID!) {
        products(productID: $productID) {
            name
            description
            image
            price
            quantity
            category
        }
    }
`;

export const QUERY_DONATIONS = gql`
    query getDonations {
        donations {
            amount
            purchaseDate
            description
        }
    }
`;

export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            firstName
            lastName
            userName
            email
        }
    }
`;

export const QUERY_SINGLE_USER = gql`
    query singleUser($userID: ID!) {
        user(userID: $userID) {
            _id
            firstName
            lastName
            userName
            email
        }
    }
`;

export const QUERY_POSTS = gql`
    query allPosts {
        text
        published
        createdAt
        comments
    }
`;

export const QUERY_SINGLE_POST = gql`
    query singlePost($postID: ID!) {
        post(postID: $postID) {
            _id
            text
            published
            createdAt
            comments
        }
    }
`;

export const QUERY_SINGLE_ORDER = gql`
    query singleOrder($orderID: ID!) {
        order(orderID: $orderID) {
            _id
            purchaseDate
            products
        }
    }
`;

export const QUERY_ME = gql`
    query me {
        me {
            _id
            firstName
            lastName
            userName
            email
        }
    }
`;

export const QUERY_CHECKOUT = gql`
    query checkout($products: [ProductInput]) {
        checkout(products: $products) {
            session
        }
    }
`;

export const QUERY_CATEGORIES = gql`
    query getCategories {
        category {
            name
        }
    }
`;