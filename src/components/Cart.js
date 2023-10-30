import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const cartItems = useSelector(store => store.cart.items)
    return (
        <div className="w-8/12 mx-auto">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold text-gray-600">Cart</h1>
                <button className="px-3 py-2 my-2 bg-gray-800 text-white rounded-lg font-bold text-lg" onClick={handleClearCart}>Clear Cart</button>
            </div>
            {cartItems?.length === 0 && <p className="text-center text-3xl my-24 text-gray-600">The cart is empty, please add some items!</p>}
            <ItemsList items={cartItems}/>
        </div>
    )
}

export default Cart;