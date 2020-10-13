import React from 'react';

import classes from './burger.module.css';
import BurgerINgredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerINgredient type="bread-top"/>
            <BurgerINgredient type="cheese"/>
            <BurgerINgredient type="meat"/>
            <BurgerINgredient type="bread-bottom"/>
        </div>
    );
}

export default burger;