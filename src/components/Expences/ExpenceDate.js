import React from "react"; 

import './ExpenceDate.css'

const ExpenceDate = (krish) => {
    const month = krish.date.toLocaleString('en-US',{month: 'long'});
    const year = krish.date.getFullYear();
    const day = krish.date.toLocaleString('en-US',{day: '2-digit'});
    
    return(
        <div className="expenceDate">
            <div className="ed-month">{month}</div>
            <div className="ed-year">{year}</div>
            <div className="ed-day">{day}</div>
        </div>
    );

}

export default ExpenceDate;