import React, { useState } from "react";

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)
    const clickHandler = () => {
        if (title !== "Updated!") {
            setTitle("Updated!")
        } else {
            setTitle(props.title)
        }
        //console.log(title)
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>
                    {props.title}
                </h2>
                <div className="expense-item__price">
                    {props.amount}€
                </div>
            </div>
        </Card>
    )
}

export default ExpenseItem