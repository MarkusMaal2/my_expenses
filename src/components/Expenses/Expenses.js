import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import React, {useState} from "react";

function Expenses(props) {
    /*props.expenses.map((expense) => {
        console.log(expense)
    })*/
    const [currentYear, setCurrentYear] = useState(props.currentYear)
    return (
        <Card className="expenses">
            <ExpensesFilter onModifyExpenseFilter={(year) => { setCurrentYear(year); props.onYearChange(currentYear);}}></ExpensesFilter>
            {
                props.expenses.filter((item) => {
                    return item.date.getFullYear() === Number(currentYear)
                }).map((expense) => {
                    return <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}></ExpenseItem>
                })
            }
        </Card>
    )
}

export default Expenses