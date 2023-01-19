import './App.css'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title: "New book",
            price: 29.99
        },
        {
            date: new Date(2022, 6, 23),
            title: "Ice cream",
            price: 1.99
        }
    ]

    const addExpenseHandler = (expense) => {
        console.log("Recieved in App.js")
        console.log(expense)
    }
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={expenses}/>
        </div>
    )
}

export default App
