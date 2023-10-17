import React from "react";
import './ExpenceItem.css'
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";


const ExpenceItem = (krishn) => {
    
    return(
        <Card className="Ei-date">
            <div>
                <ExpenceDate date={krishn.date}/>
            </div>
            <div className="Ei-desci">
                <h1>
                    {krishn.title}
                </h1>
            </div>
                <div className="Ei-amount" >
                    ${krishn.amount}
                </div>
            
            
        </Card>
    );
}

export default ExpenceItem;