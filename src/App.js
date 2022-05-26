import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INTIAL_EXPENSES = [
  {
    id: "e1",
    title: "Grocery",
    amount: 3000,
    date: new Date(2022, 3, 25),
  },
  {
    id: "e2",
    title: "Electricity Bill",
    amount: 5000,
    date: new Date(2022, 5, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INTIAL_EXPENSES);
  const [editExpense, setEditExpense] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addExpenseHandler = (newExpenseData) => {
    console.log("App.js");
    // setExpenses([newExpenseData, ...expenses]);
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
    console.log(expenses);
  };

  const deleteExpenseHandler = (id) => {
    let updatedExpenses = expenses.filter((expense, index) => {
      return expense.id !== id;
    });
    setExpenses(updatedExpenses);
    console.log(updatedExpenses, ":updatedExpenses");
  };

  const editExpenseHandler = (id) => {
    let editExpenseData = expenses.filter((expense, index) => {
      return expense.id === id;
    });
    setShowForm(true);
    setEditExpense(editExpenseData);
    // console.log(updatedExpenses, ":updatedExpenses");
  };

  return (
    <div>
      {/* <h2>Expenses Tracker</h2> */}
      <NewExpense
        onAddExpense={addExpenseHandler}
        editExpense={editExpense}
        showForm={showForm}
      />
      <Expenses
        expenses={expenses}
        deleteExpenseHandler={deleteExpenseHandler}
        editExpenseHandler={editExpenseHandler}
      />
    </div>
  );

  // alternate way

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Expense Tracker"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
};

export default App;
