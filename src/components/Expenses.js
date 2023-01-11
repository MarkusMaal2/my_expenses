import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem expenseData={props.expenses[0]} />
            <ExpenseItem expenseData={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses