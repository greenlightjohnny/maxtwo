import React from "react";
import Auxx from "../../../hoc/Auxx";
import Button from "../../UI/Button/button.jsx";

const ordersummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igk => {
    return (
      <li key={igk}>
        <span style={{ textTransform: "capitalize" }}>{igk}:</span>{" "}
        {props.ingredients[igk]}
      </li>
    );
  });

  return (
    <Auxx>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Price: ${props.totalPrice.toFixed(2)}</p>
      <p>Continue to checkout?</p>

      <Button clicked={props.purchaseCancle} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinue} btnType="Success">
        Order
      </Button>
    </Auxx>
  );
};

export default ordersummary;
