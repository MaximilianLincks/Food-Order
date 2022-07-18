import { meal } from "../Meals/Meals";
import Modal from "../UI/Modal";
import classes from "./styles/Cart.module.css";

export type cartProps = {
    onClose: () => void
};

export type order = {
  meal: meal;
  amount: number;
}

const Cart = (props: cartProps) => {

  const cartItems = [
    {
      meal: {
        id: "c1",
        name: "Sushi",
        description: "",
        price: 12.99,
      },
      amount: 2,
    },
  ].map((item) => <li>{item.meal.name}</li>);
  return (
    <Modal onBackdropClick={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
