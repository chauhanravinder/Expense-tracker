import { useState } from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [id, setId] = useState(props.id);
  console.log(`ExpenseItem component executed`);

  const clickHandler = () => {
    console.log("clicked");
    setTitle("updated");
    console.log(id);
  };

  const deleteHandler = () => {
    props.deleteExpenseHandler(id);
  };

  const editHandler = () => {
    props.editExpenseHandler(id);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>

        {/* <button onClick={clickHandler}>Change Title</button> */}
        {/* <button onClick={editHandler}>Edit</button> */}

        <button onClick={deleteHandler}>Delete</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
