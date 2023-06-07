import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CATEGORIES } from "./data";

const schema = z.object({
  description: z.string().min(3, { message: "Description should be at least 3 characters" }).max(20, { message: "Description could only have 20 characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(0.1, { message: "Amount should be at least 0.1" }).max(100_000, { message: "Amount cannot exceed $100,000" }),
  category: z.enum(CATEGORIES, { errorMap: () => ({ message: "Category is required" }) }),
});

type ExpenseFormData = z.infer<typeof schema>;

type Props = {
  onSubmitHandler: (data: ExpenseFormData) => void;
};

function ExpenseForm({ onSubmitHandler }: Props) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    const expense = { ...(data as ExpenseFormData), id: parseInt(crypto.randomUUID()) };

    onSubmitHandler(expense);
    resetField("description");
    resetField("amount");
    resetField("category");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <label htmlFor="description">Description</label>
        <input type="text" id="description" autoComplete="off" {...register("description")} />
        {errors.description && <p className="error">{errors.description.message}</p>}
      </div>
      <div className="container">
        <label htmlFor="amount">Amount</label>
        <input type="number" step=".01" id="amount" {...register("amount", { valueAsNumber: true })} />
        {errors.amount && <p className="error">{errors.amount.message}</p>}
      </div>
      <div className="container">
        <label htmlFor="category">Category</label>
        <select id="category" {...register("category", { required: true })}>
          <option value=""></option>
          {CATEGORIES.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className="error">{errors.category.message}</p>}
      </div>
      <button type="submit" style={{ backgroundColor: "dodgerblue" }}>
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
