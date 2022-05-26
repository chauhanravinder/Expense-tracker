import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [year, setYear] = useState("2022");
  const onFilterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setYear(selectedYear);
  };

  const filteredExppenses = props.expenses.filter((expense, i) => {
    return year == expense.date.getFullYear();
    // console.log(expense.date.getFullYear(), "expenseexpense");
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseChart expenses={filteredExppenses} />
        <ExpenseFilter
          onFilterChangeHandler={onFilterChangeHandler}
          selectedYear={year}
        />
        <ExpensesList
          expenses={filteredExppenses}
          deleteExpenseHandler={props.deleteExpenseHandler}
          editExpenseHandler={props.editExpenseHandler}
        />
      </Card>
    </div>
  );
};

export default Expenses;
