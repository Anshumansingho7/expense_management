import React from "react";

import Expenceform from "./Expenceform";

import './NewExpences.css'

const NewExpences = (krish) =>{

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenceData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        
        krish.onAddExpensehandler(expenceData)

        console.log(expenceData);
    };


    return(
        <div className="new-expense">
            <Expenceform onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpences;