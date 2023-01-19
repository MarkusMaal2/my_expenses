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

    props.expenses.map((expense) => {
        console.log(expense)
    })

    return (
        <Card className="expenses">
            <ExpensesFilter onModifyExpenseFilter={modifyExpenseFilterHandler}></ExpensesFilter>
            {
                props.expenses.map((expense) => {
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