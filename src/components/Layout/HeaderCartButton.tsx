import "../cart/CartIcon";
import CartIcon from "../cart/CartIcon";
import classes from "./styles/HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.icon}>3</span>
    </button>
  );
};

export default HeaderCartButton;
