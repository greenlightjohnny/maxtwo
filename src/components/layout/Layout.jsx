import React from 'react'
import Aux from '../../hoc/Aux'

import classes from './layout.module.css'

const layout = (props) => {
    return (
    <Aux>
    <div>Tool, sideDrawer, BackDrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
    )
}

export default layout;