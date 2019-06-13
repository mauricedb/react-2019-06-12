import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from "./components/counter";
import Display from "./components/display";

function App() {
  return (
    <div className="App">
      <Counter />
      <Display />
    </div>
  );
}

export default App;
