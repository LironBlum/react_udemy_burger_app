import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>
            {igKey}: {this.props.ingredients[igKey]}
          </span>
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your order</h3>
        <p>the burger:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Price: {this.props.price}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType={"Danger"} clicked={this.props.purchaseCancel}>
          Cancel
        </Button>
        <Button btnType={"Success"} clicked={this.props.purchaseContinue}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
