import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import './style.css'

const CartItem = ({ item }) => {
    const [state, dispatch] = useStoreContext();

    const removeFromCart = item => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });
    };

    const onChange = (e) => {
        const value = e.target.value;
        if (value === '0') {
            dispatch({
              type: REMOVE_FROM_CART,
              _id: item._id
            });
            idbPromise('cart', 'delete', { ...item })
        } else {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: item._id,
                purchaseQuantity: parseInt(value)
              });
              idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
        }
    };

    return (
        <div key={item._id} className="flex-row">
            <div className="cart-image-container">
                <img
                src={`/images/${item.image}`}
                alt=""
                />
            </div>
            <div className="cart-item-container">
                <div>{item.name}, ${item.price}</div>
                <div>
                <span>Qty:</span>
                <input
                    type="number"
                    placeholder="0"
                    value={item.purchaseQuantity}
                    onChange={onChange}/>
                <span className="trash-icon"
                    role="img"
                    aria-label="trash"
                    onClick={() => removeFromCart(item)}>🗑️</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;