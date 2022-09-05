import React from "react";
import Form from "./components/Form1";
import Form2 from "./components/Form2";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>localStorage React</h1>
      <Form />
      <Form2 />
    </div>
  );
};

export default App;
