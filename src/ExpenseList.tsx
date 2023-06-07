import { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";

type Expense = {
  id: number;
  description: string;
  amount: number;
  category: string;
};

type Props = {
  expenses: Expense[];
  onDelete: (id: number) => void;
};

function ExpenseList({ expenses, onDelete }: Props) {
  const [categorySelected, setCategorySelected] = useState("All");
  if (expenses.length === 0) return <h4>No Expenses. You can add a new Expense by entering the values above</h4>;
  const expensesFiltered = expenses.filter((e) => (categorySelected !== "All" ? e.category === categorySelected : e));
  const total = expensesFiltered.reduce((acc, expense) => expense.amount + acc, 0);

  return (
    <section className="list-container">
      <ExpenseFilter handleSelection={(cat) => setCategorySelected(cat)} />
      {expensesFiltered.length === 0 ? (
        <p>No Expenses register for the selected category</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expensesFiltered.map((expense: Expense) => {
              const { id, description, amount, category } = expense;
              return (
                <tr key={id}>
                  <td>{description}</td>
                  <td>${amount.toLocaleString("en-US")}</td>
                  <td>{category}</td>
                  <td>
                    <button onClick={() => onDelete(id)} style={{ backgroundColor: "firebrick" }}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td style={{ fontWeight: "bold" }}>TOTAL</td>
              <td>${total.toLocaleString("en-US")}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </section>
  );
}

export default ExpenseList;
