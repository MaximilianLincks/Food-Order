import { meal } from "../Meals";
import MealItemForm from "./MealItemForm";
import classes from "./styles/MealItem.module.css";

const MealItem = (props: meal ) => {
  const price = `${props.price.toFixed(2)}€`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm {...props}/>
      </div>
    </li>
  );
};

export default MealItem;
