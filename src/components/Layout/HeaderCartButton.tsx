import "../cart/CartIcon";
import CartIcon from "../cart/CartIcon";
import { headerProps } from "./Header";
import classes from "./styles/HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props: headerProps) => {
  const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items
    .map((item) => item.count)
    .reduce((acc, x) => {
      return acc + x;
    }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;

  useEffect(() => {
    if (cartCtx.items.length > 0) setBtnIsHighLighted(true);
    const timer = setTimeout(() => setBtnIsHighLighted(false), 300);

    return () => clearTimeout(timer);
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.icon}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
