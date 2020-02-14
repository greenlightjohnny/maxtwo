import React from "react";
import Auxx from "../../../hoc/Auxx/Auxx";
import Button from "../../UI/Button/button.jsx";

class ordersummary extends React.Component {
  componentDidUpdate() {
    console.log("[ORDER SUMMARY]");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igk => {
      return (
        <li key={igk}>
          <span style={{ textTransform: "capitalize" }}>{igk}:</span>{" "}
          {this.props.ingredients[igk]}
        </li>
      );
    });

    return (
      <Auxx>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Price: ${this.props.totalPrice.toFixed(2)}</p>
        <p>Continue to checkout?</p>

        <Button clicked={this.props.purchaseCancle} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinue} btnType="Success">
          Order
        </Button>
      </Auxx>
    );
  }
}

export default ordersummary;
