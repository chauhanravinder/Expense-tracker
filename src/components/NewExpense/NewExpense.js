import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpensDataHandler = (entredExpenseData) => {
    const expenseData = {
      ...entredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    console.log(expenseData, "Nwe");
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpensDataHandler} />
    </div>
  );
};

export default NewExpense;
