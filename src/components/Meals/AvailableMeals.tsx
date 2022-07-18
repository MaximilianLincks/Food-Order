import Card from "../UI/Card";
import DUMMY_MEALS from "./dummy-meals";
import MealItem from "./MealItem/MealItem";
import classes from "./styles/AvailableMeals.module.css";

const AvailAbleMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} {...meal} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailAbleMeals;
