import React from "react";
import "./App.css";

import Clock from "./components/clock";
import Greeter from "./components/greeter";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <Clock interval={1000} />
      <Greeter firstName="Maurice" />
      <Greeter firstName2="Jack" />
      <Counter />
    </div>
  );
}

export default App;
