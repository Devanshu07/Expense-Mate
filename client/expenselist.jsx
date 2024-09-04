import React, { useState, useEffect } from 'react';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetch expenses from the backend
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Expenses</h1>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className="p-2 border-b">
            {expense.description}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
