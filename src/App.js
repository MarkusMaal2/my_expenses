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
    return (
        <div className="App">
            <NewExpense></NewExpense>
            <Expenses expenses={expenses}/>
        </div>
    )
}

export default App
