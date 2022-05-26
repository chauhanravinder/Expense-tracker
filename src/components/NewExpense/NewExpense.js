import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpensDataHandler = (entredExpenseData) => {
    const expenseData = {
      ...entredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    console.log(expenseData, "Nwe");
  };

  const showFormClickHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormClickHandler}>New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpensDataHandler}
          onCancelHandler={showFormClickHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
