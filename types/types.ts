export type MonthStatusType = {
  balance: string;
  currentMonth: string;
  totalExpenses: string;
  totalOfMonth: string;
};

export type ExpensesType = {
  author: string;
  desc: string;
  value: string;
  date: string;
};

export type ExpenseType = {
  expenses: ExpensesType[];
  total: string;
};
