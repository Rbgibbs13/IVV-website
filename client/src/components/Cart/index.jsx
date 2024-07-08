import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';

// const stripePromise = loadStripe();

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [checkout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        console.log(data);
        if(data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        } else {
            console.error("NO DATA!");
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }

        if(!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    };

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
            if(item.price > 0) {
                sum += item.price * item.purchaseQuantity;
            }
        });
        return sum.toFixed(2);
    };

    function submitCheckout() {
        const new_cart = [...state.cart].map((item) => {
            delete item ['category']
            return item
        });
        console.log({ variables : { products: new_cart }});
        checkout({ variables: { products: new_cart, }});
    };

    if(!state.cartOpen) {
        return (
            <main className='cart-closed-main'>
                <div className='cart-closed-parent' onClick={toggleCart}>
                    <span className='cart-widget' role='img' aria-label='trash'>🛒</span>
                </div>
            </main>
        );
    };

    return (
        <main className='cart-open-main'>
            <div className="cart">
                <div className="close" onClick={toggleCart}>
                    [close]
                </div>
                <h2>Shopping Cart</h2>
                {state.cart.length ? (
                    <div>
                    {state.cart.map((item) => (
                        <CartItem 
                        key={item._id} 
                        item={item} />
                    ))}

                    <div className="flex-row space-between">
                        <strong>Total: ${calculateTotal()}</strong>

                        {/* Check to see if the user is logged in. If so render a button to check out */}
                        {Auth.loggedIn() ? (
                        <button onClick={submitCheckout}>Checkout</button>
                        ) : (
                        <span>(log in to check out)</span>
                        )}
                    </div>
                    </div>
                ) : (
                    <h3>
                    <span role="img" aria-label="shocked">
                        😱
                    </span>
                    You haven't added anything to your cart yet!
                    </h3>
                )}
            </div>
        </main>
    );
};

export default Cart;