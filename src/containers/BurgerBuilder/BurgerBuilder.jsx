import React, { Component } from 'react'
import Auxx from '../../hoc/Auxx'
import Burger from '../../components/burger/Burger.jsx';
import BuildControls from '../../components/burger/BuildControls/BuildControl/BuildControl';
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props)
    // }
    state = {  
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }
    
    render() { 
        console.log(this.state)
        return ( 
        <Auxx>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls />
        </Auxx>
         );
    }
}
 
export default BurgerBuilder;