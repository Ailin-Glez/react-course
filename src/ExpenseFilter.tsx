import { CATEGORIES } from "./data";

type Props = {
  handleSelection: (category: string) => void;
};

function ExpenseFilter({ handleSelection }: Props) {
  return (
    <select id="category" onChange={(e) => handleSelection(e.target.value)}>
      <option value="All">All Categories</option>
      {CATEGORIES.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
