import "../cart/CartIcon";
import CartIcon from "../cart/CartIcon";
import { headerProps } from "./Header";
import classes from "./styles/HeaderCartButton.module.css";
import CartContext from "../../store/cart-context"
import { useContext } from "react";

const HeaderCartButton = (props: headerProps) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items
    .map(item => item.count)
    .reduce((acc, x) => {return acc + x}, 0);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.icon}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
