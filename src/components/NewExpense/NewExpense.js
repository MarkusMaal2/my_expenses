import React, {useState} from "react"
import './NewExpense.css'

import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
    const [addFormVisible, setAddForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const toggleFormHandler = () => {
        setAddForm(!addFormVisible)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onToggleForm={toggleFormHandler} onSaveExpenseData={saveExpenseDataHandler} formVisible={addFormVisible}></ExpenseForm>
        </div>
    )
}

export default NewExpense