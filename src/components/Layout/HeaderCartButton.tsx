import "../cart/CartIcon";
import CartIcon from "../cart/CartIcon";
import { headerProps } from "./Header";
import classes from "./styles/HeaderCartButton.module.css";

const HeaderCartButton = (props: headerProps) => {
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.icon}>3</span>
    </button>
  );
};

export default HeaderCartButton;
