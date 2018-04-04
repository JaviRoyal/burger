import React from 'react';
import classes from './MenuToggler.css'

const menuToggler = (props) => {
    return (
        <div
            onClick = {props.menuClicked} 
            className={classes.MenuToggler}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default menuToggler;