import React, { Component } from "react";
import Auxx from "../../hoc/Auxx";
import Burger from "../../components/burger/Burger.jsx";
import BuildControls from "../../components/burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal.jsx";
import OrderSummary from "../../components/burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.6,
  meat: 0.9
};
class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props)
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((a, b) => {
        return a + b;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    const mac = !this.state.purchasing;
    this.setState({ purchasing: mac });
    console.log(mac);
  };

  purchaseCancleHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("You Continue");
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Auxx>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancleHandler}
        >
          <OrderSummary
            purchaseCancle={this.purchaseCancleHandler}
            purchaseContinue={this.purchaseContinueHandler}
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Auxx>
    );
  }
}

export default BurgerBuilder;
