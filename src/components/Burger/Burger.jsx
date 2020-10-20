import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

const Burger = props => {
  let ingredients = Object.keys(props.ingredients)
    .map(igkey => {
      return [...Array(props.ingredients[igkey])].map((_, i) => {
        return (
          <BurgerIngredient key={igkey + i} type={igkey}></BurgerIngredient>
        );
      });
    })
    .reduce((arr, element) => {
      return arr.concat(element);
    }, []);

  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
