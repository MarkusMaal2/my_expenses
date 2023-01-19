import './App.css'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    // sample data, just for testing
    const DUMMY_EXPENSES = [
        {
            date: new Date(2023, 0, 10),
            title: "New book",
            price: 29.99
        },
        {
            date: new Date(2022, 6, 23),
            title: "Ice cream",
            price: 1.99
        },
        {
            date: new Date(2023, 9, 31),
            title: "Shoes",
            price: 14.55
        }
    ]

    const addExpenseHandler = (expense) => {
        console.log("Recieved in App.js")
        console.log(expense)
    }
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={DUMMY_EXPENSES}/>
        </div>
    )
}

export default App
