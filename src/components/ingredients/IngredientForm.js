import React, { useState } from 'react';

import Card from "../UI/Card";
import classes from './IngredientForm.module.css';

const IngredientForm = React.memo(props => {

    const [inputTitle, setTitle] = useState('');
    const [inputAmount, setAmount] = useState('');

    const submitHandler = event => { 
        event.preventDefault();
    };

    return (
        <section className={classes.IngredientForm}>
            <Card>
                <form onSubmit={submitHandler}>
                    <div className={classes.FormControl}>
                        <label htmlFor='title'>Name</label>
                        <input
                            type='text'
                            id='title'
                            value={inputTitle}
                            onChange={event => setTitle(event.target.value)} />
                    </div>
                    <div className={classes.FormControl}>
                        <label htmlFor='amount'>Amount</label>
                        <input
                            type='number'
                            id='amount'
                            value={inputAmount}
                            onChange={event => setAmount(event.target.value)} />
                    </div>
                    <div className={classes.IngredientFormActions}>
                        <button type="submit">Add Ingredient</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default IngredientForm;