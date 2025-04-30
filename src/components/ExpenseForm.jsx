import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");      // New state for amount
    const [category, setCategory] = useState("");  // New state for category
    const [date, setDate] = useState("");          // New state for date

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ensure all fields have values before adding an expense
        if (name && description && amount && category && date) {
            const newExpense = {
                id: Date.now(),
                name,
                description,
                amount,
                category,
                date,
            };
            addExpense(newExpense);
            // Reset all fields after adding the expense
            setName("");
            setDescription("");
            setAmount("");
            setCategory("");
            setDate("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Expense Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <label>
                Amount:
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </label>
            <label>
                Category:
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Bills">Bills</option>
                    <option value="Transportation">Transportation</option>
                    {/* Add more categories as needed */}
                </select>
            </label>
            <label>
                Date:
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;