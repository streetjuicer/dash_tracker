import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Expenses } from "./components/Expenses";
import { Transaction } from "./components/Transaction";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <Transaction />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
