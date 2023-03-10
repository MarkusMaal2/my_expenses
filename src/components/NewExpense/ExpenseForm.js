import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        //console.log(expenseData)
        props.onToggleForm(props.formVisible)
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredDate('')
        setEnteredAmount('')

    }

    const toggleVisibleHandler = (e) => {
        props.onToggleForm(props.formVisible)
        e.preventDefault()
    }

    return (

        <div>
            { props.formVisible &&
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}
                                   value={enteredAmount}/>
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler}
                                   value={enteredDate}/>
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                        <button type="submit">Cancel</button>
                    </div>
                </form>
            }
            { !props.formVisible &&
                <form onSubmit={toggleVisibleHandler}>
                    <div className="new-expense__actions"><button type="submit">Add Expense</button></div>
                </form>
            }
        </div>
    )
}
export default ExpenseForm