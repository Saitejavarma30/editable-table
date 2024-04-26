import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/table";

function App() {
  const header = ["name", "age", "place"];
  const data = [
    {
      name: "sai",
      age: 24,
      place: "banglore",
    },
    {
      name: "teja",
      age: 24,
      place: "ban",
    },
  ];
  return <Table headers={header} data={data} />;
}

export default App;
