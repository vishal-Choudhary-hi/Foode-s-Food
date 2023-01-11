import { useRef, useState } from "react";

import Classes from "./MealItemForm.module.css";

import Input from "../UI/Input";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  };
  return (
    <form className={Classes.form} onSubmit={onSubmit}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "Amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
      {!isValid && <p>Please enter correct amount</p>}
    </form>
  );
};
export default MealItemForm;
