import React from "react";
import { order } from "../components/cart/Cart";

const CartContext = React.createContext({
    items: [] as order[],
    totalAmount: 0,
    addItem: (item: order) => {},
    removeItem: (id: string) => {}
});

export default CartContext;