import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCart = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCardItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCardItem = state.items[existingCardItemIndex];
    let updatedItems;
    let updatedItem;
    if (existingCardItem) {
      updatedItem = {
        ...existingCardItem,
        amount: action.item.amount + existingCardItem.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCardItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "Remove") {
    const existingCardItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedCartItemAmount =
      state.totalAmount - state.items[existingCardItemIndex].amount;
    let updatedItems;
    const existingCardItem = state.items[existingCardItemIndex];
    if (existingCardItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCardItem,
        amount: existingCardItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCardItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedCartItemAmount,
    };
  }
  return defaultCart;
};

const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);
  const addItem = (item) => {
    dispatchCartAction({ type: "Add", item: item });
  };
  const removeItem = (id) => {
    dispatchCartAction({ type: "Remove", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default ContextProvider;
