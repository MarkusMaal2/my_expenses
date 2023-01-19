import './Expenses.css'
//import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import React, {useState} from "react";

function Expenses(props) {
    /*props.expenses.map((expense) => {
        console.log(expense)
    })*/
    const [currentYear, setCurrentYear] = useState(props.currentYear)
    // create an array of filtered expenses
    const filteredExpenses = props.expenses.filter((item) => {
        return item.date.getFullYear() === Number(currentYear)
    })

    // display result
    return (
        <Card className="expenses">
            <ExpensesFilter onModifyExpenseFilter={(year) => { setCurrentYear(year); props.onYearChange(currentYear);}}></ExpensesFilter>
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    )
}

export default Expenses