import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Record Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense, i) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={expense.id}
          id={expense.id}
          deleteExpenseHandler={props.deleteExpenseHandler}
          editExpenseHandler={props.editExpenseHandler}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
