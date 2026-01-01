import { useState } from "react";
import Expenses from "./expenses/Expenses";
import Form from "./form/Form";

function App() {
  const dataExpenses = [
    // {
    //   id: 1,
    //   title: "Toilet Paper",
    //   amount: 94.12,
    //   date: new Date(2020, 7, 14),
    // },
    // { id: 2, title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    // {
    //   id: 3,
    //   title: "Car Insurance",
    //   amount: 294.67,
    //   date: new Date(2021, 2, 28),
    // },
    // {
    //   id: 4,
    //   title: "New Desk (Wooden)",
    //   amount: 450.59,
    //   date: new Date(2021, 5, 12),
    // },
  ];

  // -----------------

  const [expenses, setExpenses] = useState(dataExpenses);

  function inputHandler(data) {
    const userData = {
      id: expenses.length + 1,
      ...data,
    };

    setExpenses((prevData) => {
      return [userData, ...prevData];
    });
  }

  console.log(expenses);

  return (
    <>
      <Form userInput={inputHandler} />
      <Expenses dataUser={expenses} />
    </>
  );
}

export default App;
