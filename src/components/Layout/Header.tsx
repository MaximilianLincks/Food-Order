import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./styles/Header.module.css";


export type headerProps = {
    onShowCart: () => void,

};

const Header = (props: headerProps) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React-Meals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="tabel full of food" />
      </div>
    </>
  );
};

export default Header;
