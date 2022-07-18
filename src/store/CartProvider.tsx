import { ReactNode } from "react";
import { order } from "../components/cart/Cart";
import CartContext from "./cart-context"

const CartProvider = (props: {children: ReactNode}) => {

    const addItemToCartHandler = (item: order) => {};
    const removeItemFromCartHandler = (id: string) => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;