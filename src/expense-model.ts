import { z } from "zod";

export enum Categories {
  Groceries,
  Utilities,
  Entertainment,
}

export const schema = z.object({
  id: z.number(),
  description: z.string(),
  amount: z.number(),
  category: z.string(),
});

export type Expense = z.infer<typeof schema>;
