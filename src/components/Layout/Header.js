import CartButton from "./CartButton";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Fooie's Food</h1>
        <CartButton onClick={props.onShowCart}>Cart</CartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table"></img>
      </div>
    </>
  );
};

export default Header;
