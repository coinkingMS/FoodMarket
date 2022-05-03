import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <div className={classes.summary}>
      <h2>Dellicious Food, Delivered To You</h2>
      <p>
        choose your favorite meal from our broad selection of available mealse
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with hight-quality ingredients, just-in-time
        and of course by experienced chefs!
      </p>
    </div>
  );
};
export default MealsSummary;
