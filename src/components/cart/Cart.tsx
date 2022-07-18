import { meal } from "../Meals/Meals";
import Modal from "../UI/Modal";
import classes from "./styles/Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

export type cartProps = {
  onClose: () => void;
};

export type order = {
  meal: meal;
  count: number;
};

const Cart = (props: cartProps) => {
  const cardCtx = useContext(CartContext);

  const totalAmount = `${cardCtx.totalAmount.toFixed(2)}€`;
  const hasItems = cardCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cardCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: meal) => {
    cardCtx.addItem({ meal: item, count: 1 });
  };

  const cartItems = cardCtx.items.map((item) => (
    <CartItem
      {...item}
      key={item.meal.id}
      onAdd={cartItemAddHandler.bind(null, item.meal)}
      onRemove={cartItemRemoveHandler.bind(null, item.meal.id)}
    />
  ));

  return (
    <Modal onBackdropClick={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
