import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
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

  const addExpenseHandler = (newExpenseData) => {
    console.log("App.js");
    expenses.push(newExpenseData);
    console.log(newExpenseData);
    console.log(expenses);
  };
  return (
    <div>
      {/* <h2>Expenses Tracker</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
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
