import { useContext } from "react";
import Classes from "./MealItem.module.css";
import CartContext from "../../store/cart-context";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const onAddToCart = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={Classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={Classes.description}>{props.description}</div>
        <div className={Classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};
export default MealItem;
