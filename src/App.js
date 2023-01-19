import './App.css'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

// sample data, just for testing
const DUMMY_EXPENSES = [
    {
        id: 'e1',
        date: new Date(2023, 0, 10),
        title: "New book",
        amount: 29.99
    },
    {
        id: 'e2',
        date: new Date(2024, 6, 23),
        title: "Ice cream",
        amount: 1.99
    },
    {
        id: 'e3',
        date: new Date(2024, 9, 31),
        title: "Shoes",
        amount: 14.55
    }
]

const App = () => {
    const [currentYear, setCurrentYear] = useState(2023)
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
    const addExpenseHandler = (expense) => {
        console.log("Recieved in App.js")
        setExpenses((previousExpenses) => {
            return [expense, ...expenses]
        })
    }

    const changeYearHandler = (year) => {
        setCurrentYear((previousYear) => {
            return year
        })
    }
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses onYearChange={changeYearHandler} expenses={expenses} currentYear={currentYear}/>
        </div>
    )
}

export default App
