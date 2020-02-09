import React from 'react'
import Auxx from '../../hoc/Auxx'

import classes from './layout.module.css'

const layout = (props) => {
    return (
    <Auxx>
    <div>Tool, sideDrawer, BackDrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Auxx>
    )
}

export default layout;