import { meal } from "../Meals";
import Input, { inputFieled } from "./Input";
import classes from "./styles/MealItemForm.module.css";

const MealItemForm = (props: meal) => {
  const inputConfig: inputFieled = {
    label: "Amount",
    input: {
      id: "amount_" + props.id,
      type: "number",
      min: "1",
      max: "5",
      step: "1",
      defaultValue: "1"
    },
  };

  return (
    <form className={classes.form}>
      <Input {...inputConfig} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
