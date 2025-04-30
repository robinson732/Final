import React from 'react';

const ExpensesList = ({ expenses, deleteExpense }) => {
    return (
        <ul>
            {expenses.map((expense) => (
                <li key={expense.id}>
                    <div>
                        <strong>{expense.name}</strong> - {expense.description}
                    </div>
                    <div>Category: {expense.category}</div>
                    <div>Amount: ${expense.amount}</div>
                    <div>Date: {new Date(expense.date).toLocaleDateString()}</div> {/* Format the date */}
                    <button onClick={() => deleteExpense(expense.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ExpensesList;