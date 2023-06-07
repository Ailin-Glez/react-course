import { useState } from "react";

import { INITIAL_EXPENSES } from "./data";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  return (
    <>
      <h1>Expense Tracker</h1>
      <div className="container-all">
        <ExpenseForm onSubmitHandler={(newExpense) => setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }])} />
        <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
      </div>
    </>
  );
}

export default App;
