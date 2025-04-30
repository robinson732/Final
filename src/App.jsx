// App.jsx
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpensesList from "./components/ExpensesList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";
const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ExpenseForm addExpense={addExpense} />
      <ExpensesList expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </div>
  );
};
export default App;  