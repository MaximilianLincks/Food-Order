import { order } from "./Cart";
import classes from "./styles/CartItem.module.css";

const CartItem = (
  props: order & {
    onRemove: () => void;
    onAdd: () => void;
  }
) => {
  const price = `${props.meal.price.toFixed(2)}€`;

  const onAddFunction: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    props.onAdd()
  }

  const onRemoveFunction: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    props.onRemove()
  }

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.meal.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.count}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveFunction}>−</button>
        <button onClick={onAddFunction}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
