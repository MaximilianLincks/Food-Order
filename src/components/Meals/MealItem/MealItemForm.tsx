import { FormEventHandler, MutableRefObject, useRef, useState } from "react";
import { meal } from "../Meals";
import Input, { inputFieled } from "./Input";
import classes from "./styles/MealItemForm.module.css";

const MealItemForm = (props: meal & {onAddToCart: (count: number) => void}) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const submitHandler: FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    const enteredAmount = +amountInputRef.current.value.trim();

    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    event.preventDefault();

    props.onAddToCart(enteredAmount);
  };

  const inputConfig: inputFieled = {
    label: "Amount",
    input: {
      id: "amount_" + props.id,
      type: "number",
      min: "1",
      max: "5",
      step: "1",
      defaultValue: "1",
    },
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input {...inputConfig} ref={amountInputRef} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a number between 1 and 5</p>}
    </form>
  );
};

export default MealItemForm;
