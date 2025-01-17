import {
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_CART_QUANTITY,
    TOGGLE_CART,
    UPDATE_PRODUCTS,
    UPDATE_POSTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
} from './actions';

export const reducer = (state, action) => {
    console.log(action);
    
    switch(action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        case UPDATE_POSTS:
            return {
                ...state,
                posts: [...action.posts],
            };
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                category: [...action.category],
            };
        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product],
            };
        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.products],
            };
        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    if(action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity
                    }
                    return product;
                })
            };
        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
                return product._id !== action._id;
            });
            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };
        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };
        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };
        default:
            return state;
    }
};