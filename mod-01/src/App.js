import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Greeter from "./components/Greeter";
import Clock from "./components/Clock";
import Jokes from "./components/Jokes";
import Editor from "./components/Editor";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeter firstName="Jack" className="red" />
        <Clock />
        <Editor />
        <Jokes />

        <p>
          Edit <code>src/App.js</code> and save to reload. Can I really do that?
          Version: {props.version.toString()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
