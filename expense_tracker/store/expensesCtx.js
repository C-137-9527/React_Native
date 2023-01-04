import { createContext, useState } from 'react';

export const expensesContext = createContext({});

export default function ExpensesProvider({ children }) {
  const initialExpenses = [
    { id: 1, item: 'sample 1', date: new Date(), price: 19.89 },
    {
      id: 2,
      item: 'sample 2',
      date: new Date('1995-12-17T03:24:00'),
      price: 1.99,
    },
  ];

  const [allExpenses, setAllExpenses] = useState(initialExpenses);

  const addExpenseHandler = (newExpenseItem) => {
    setAllExpenses((prev) => [...prev, newExpenseItem]);
  };

  const deleteExpenseHandler = (id) => {
    setAllExpenses((prev) =>
      prev.filter((expenseItem) => expenseItem.id !== id)
    );
  };

  const value = {
    allExpenses: allExpenses,
    addExpense: addExpenseHandler,
    deleteExpense: deleteExpenseHandler,
  };

  return (
    <expensesContext.Provider value={value}>
      {children}
    </expensesContext.Provider>
  );
}
