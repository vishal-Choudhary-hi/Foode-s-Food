import { useContext } from "react";

import CartContext from "../../store/cart-context";
import Classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
// import { useState } from "react";
const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const removeItem = (id) => {
    cartContext.removeItem(id);
  };
  const addItem = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const CartItems = (
    <ul className={Classes.cartItems}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItem.bind(null, item.id)}
          onAdd={addItem.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {CartItems}
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={Classes.actions}>
        <button className={Classes["button-alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={Classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
