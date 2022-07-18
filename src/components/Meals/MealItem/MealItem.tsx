import { meal } from "../Meals";
import MealItemForm from "./MealItemForm";
import classes from "./styles/MealItem.module.css";
import CartContext from "../../../store/cart-context"
import { useContext } from "react";


const MealItem = (props: meal, key: string) => {
  const price = `${props.price.toFixed(2)}€`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (count: number) => {
    cartCtx.addItem({meal: {...props}, count: count})
  };

  return (
    <li className={classes.meal} key={key}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm {...props} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
