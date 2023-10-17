import React from "react";

import './Expenses.css'

import ExpenceItem from "./ExpenceItem";
import Card from "../UI/Card";

const Expenses = (ram) => {
    return(
        <Card className="expences">
            {
                ram.item.map(
                    expense =>(
                        <ExpenceItem  
                            date={expense.date} 
                            title={expense.title} 
                            amount={expense.amount}/>
                    )
                )
            }
        
        </Card>
    );
}

export default Expenses