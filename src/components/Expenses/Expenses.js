import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
    let currentYear = 2023

    const modifyExpenseFilterHandler = (year) => {
        console.log(`Year in Expenses.js: ${year}`)
        currentYear = year
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onModifyExpenseFilter={modifyExpenseFilterHandler}></ExpensesFilter>
            <ExpenseItem expenseData={props.expenses[0]} />
            <ExpenseItem expenseData={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses