import { useState } from "react";

import ExpenseList from "./ExpenseList";

const INITIAL_EXPENSES = [
  {
    id: 1,
    description: "Eggs",
    amount: 10,
    category: "Groceries",
  },
  {
    id: 4,
    description: "Milk",
    amount: 5,
    category: "Groceries",
  },
  {
    id: 2,
    description: "Electricity",
    amount: 100,
    category: "Utilities",
  },
  {
    id: 3,
    description: "Movies",
    amount: 15,
    category: "Entertainment",
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
    </>
  );
}

export default App;
