export const INITIAL_EXPENSES = [
  {
    id: 1,
    description: "Eggs",
    amount: 8,
    category: "Groceries",
  },
  {
    id: 4,
    description: "Milk",
    amount: 2,
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

export const CATEGORIES = ["Groceries", "Entertainment", "Utilities"] as const;
