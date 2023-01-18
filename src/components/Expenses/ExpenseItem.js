import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
    const clickHandler = () => {
        console.log("click")
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenseData.date} />
            <div className="expense-item__description">
                <h2>
                    {props.expenseData.title}
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