import CartIcom from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartContext = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const numberOfItems = cartContext.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  const btnClasses = `${Classes.button} ${
    btnIsHighlighted ? Classes.bump : ""
  }`;
  const { items } = cartContext;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={Classes.icon}>
          <CartIcom />
        </span>
        <span>Your Cart</span>
        <span className={Classes.badge}>{numberOfItems}</span>
      </button>
    </>
  );
};
export default CartButton;
