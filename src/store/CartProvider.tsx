import { ReactNode, useReducer } from "react";
import { order } from "../components/cart/Cart";
import CartContext from "./cart-context";

type state = {
  items: order[];
  totalAmount: number;
};

type dispactchAction =
  | {
      type: "ADD";
      item: order;
    }
  | {
      type: "REMOVE";
      id: string;
    };

const defaultCartState = {
  items: [] as order[],
  totalAmount: 0,
};

//can break for orders with a count of < 0
const cartReducer = (state: state, action: dispactchAction) => {
  if (action.type === "ADD") {

    const mealOrderFilter = (item: order) => {
      return item.meal.id !== action.item.meal.id;
    };

    const itemOrderIndex = state.items.findIndex(mealOrderFilter);
    var newStateItems: order[];

    if (itemOrderIndex !== -1) {
      const newCount = state.items[itemOrderIndex].count + action.item.count;
      newStateItems = state.items
        .filter((item) => !mealOrderFilter(item))
        .concat({ meal: action.item.meal, count: newCount });
    } else {
      newStateItems = state.items.concat(action.item);
    }
    const newTotal =
      state.totalAmount + action.item.count * action.item.meal.price;
    return {
      items: newStateItems,
      totalAmount: newTotal,
    };
  }
  return defaultCartState;
};

const CartProvider = (props: { children: ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: order) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
