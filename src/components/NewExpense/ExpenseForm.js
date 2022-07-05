import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //     enteredTitle : '',
  //     enteredAmount : '',
  //     enteredDate : ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  //     useState({
  //         ...userInput,
  //        enteredTitle : event.target.value,
  //     });
  //   };

  // **
  // setUserInput((prevState) => {
  //     return {...prevState, enteredTitle : event.target.value}
  // })
  //

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  //   useState({
  //       ...userInput,
  //      enteredAmount : event.target.value,
  //   });
  // };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  //   useState({
  //       ...userInput,
  //      enteredDate : event.target.value,
  //   });
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: enteredtitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseDate(expenseDate)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
