import { ReactNode, useReducer } from "react";
import { order } from "../components/cart/Cart";
import CartContext from "./cart-context";

type state = {
    items: order[],
    totalAmount: number
}

type dispactchAction = {
    type: "ADD",
    item: order
} | {
    type: "REMOVE",
    id: string
}

const defaultCartState = {
    items:[] as order[],
    totalAmount: 0
}

const cartReducer = (state: state , action: dispactchAction) => {
    if(action.type === "ADD"){
        const itemOrderIndex = state.items.findIndex(item => item.meal.id == action.item.meal.id);
        if(itemOrderIndex != -1){
            state.items[itemOrderIndex].count += action.item.count;
            state.totalAmount += action.item.count;
        }
    }
    return defaultCartState;
};

const CartProvider = (props: {children: ReactNode}) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: order) => {
        dispatchCartAction({type: "ADD", item: item});
    };

    const removeItemFromCartHandler = (id: string) => {
        dispatchCartAction({type: "REMOVE", id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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