import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  // console.log(props);
  return (
    <div>
      <ExpenseFilter />
      <Card className="expenses">
        <ExpenseItem
          title={props.expenses[0].title}
          date={props.expenses[0].date}
          amount={props.expenses[0].amount}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          date={props.expenses[1].date}
          amount={props.expenses[1].amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;
