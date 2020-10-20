import React from "react";
import classes from "./buildControl.module.css";

const BuildControl = props => (
  <div className={classes.buildControl}>
    <div className={classes.label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.remove}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.add}>
      More
    </button>
  </div>
);

export default BuildControl;
