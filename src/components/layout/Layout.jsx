import React from 'react'
import Auxx from '../../hoc/Auxx'
import Backdrop from '../UI/Backdrop/Backdrop'
import classes from './layout.module.css'

const layout = (props) => {
    return (
    <Auxx>
    <Backdrop />
    <main className={classes.Content}>
        {props.children}
    </main>
    </Auxx>
    )
}

export default layout;