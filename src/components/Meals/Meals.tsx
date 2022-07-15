import AvailAbleMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

export type meal = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailAbleMeals />
    </>
  );
};

export default Meals;
