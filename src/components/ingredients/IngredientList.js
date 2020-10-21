import React from 'react';

import classes from './IngredientList.module.css';

const IngredientList = props => {
    return (
        <section className={classes.IngredientList}>
            <h2>Loaded Ingredients</h2>
            <ul>
                {props.ingredients.map(el => (
                    <li key={el.id} onClick={props.onRemoveItem.bind(this, el.id)}>
                        <span>{el.title}</span>
                        <span>{el.amount}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};
 
export default IngredientList;