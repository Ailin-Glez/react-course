type Props = {
  handleSelection: (category: string) => void;
};

function ExpenseFilter({ handleSelection }: Props) {
  return (
    <select id="category" onChange={(e) => handleSelection(e.target.value)}>
      <option value="All">All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Utilities">Utilities</option>
    </select>
  );
}

export default ExpenseFilter;
