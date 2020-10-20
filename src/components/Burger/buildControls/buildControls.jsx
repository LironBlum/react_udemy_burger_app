import React from "react";
import classes from "./buildControls.module.css";
import BuildControl from "./buildControl/buildControl";

const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" }
];
const BuildControls = props => (
  <div className={classes.buildControls}>
    <p>Price: {props.price.toFixed(2)}</p>
    {controls.map(ctrl => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          add={() => props.ingredientAdded(ctrl.type)}
          remove={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
          price={props.price}
        />
      );
    })}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
