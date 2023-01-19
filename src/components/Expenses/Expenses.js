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
    // default value
    let expensesContent = <p>No expenses found</p>
    // create an array of filtered expenses
    const filteredExpenses = props.expenses.filter((item) => {
        return item.date.getFullYear() === Number(currentYear)
    })
    // if filtered expenses contains something, map each ExpenseItem component to an expense from the list
    if (filteredExpenses.length > 0)
    {
        expensesContent = filteredExpenses.map((expense) => {
            return <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}></ExpenseItem>
        })
    }
    // display result
    return (
        <Card className="expenses">
            <ExpensesFilter onModifyExpenseFilter={(year) => { setCurrentYear(year); props.onYearChange(currentYear);}}></ExpensesFilter>
            {
                expensesContent
            }
        </Card>
    )
}

export default Expenses