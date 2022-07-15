import DUMMY_MEALS from "./dummy-meals";
import classes from "./styles/AvailableMeals.module.css"
const AvailAbleMeals = () => {
    
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

    return (
        <section className={classes.meals}>
            <ul>
            {mealsList}
            </ul>
            
        </section>
    
    );
}

export default AvailAbleMeals;