import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]


const buildControls = (props) => {
    
    return ( 
        <div className={classes.BuildControls}>
<h3>Price: ${props.price}</h3>
            {controls.map(ctrl => {
               
               return <BuildControl 
               key={ctrl.label} 
               label={ctrl.label}
               added={() => props.ingredientAdded(ctrl.type)} 
               removed={() => props.ingredientRemoved(ctrl.type)} 
               disabled={props.disabled[ctrl.type]}
                />
            })}
            <button 
            disabled={!props.purchasable}
            onClick={props.ordered}
            className={classes.OrderButton}>ORDER NOW</button>
        </div>
     );
}
 
export default buildControls;
