import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseDate = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDate);
    setIsEditing(false)
  };

    const startEditingHandler = () =>{
      setIsEditing(true)
    }
    const stopEditingHandler = () => {
      setIsEditing(false)
    }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
      {isEditing &&   <ExpenseForm onSaveExpenseDate={onSaveExpenseDateHandler} onCancle={stopEditingHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
