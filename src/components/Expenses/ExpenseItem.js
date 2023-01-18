import React, { useState } from "react";

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.expenseData.title)
    const clickHandler = () => {
        if (title !== "Updated!") {
            setTitle("Updated!")
        } else {
            setTitle(props.expenseData.title)
        }
        //console.log(title)
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.date} />
            <div className="expense-item__description">
                <h2>
                    {title}
                </h2>
                <div className="expense-item__price">
                    {props.expenseData.price}€
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem