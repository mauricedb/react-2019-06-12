import React from "react";
import "./App.css";

import { Provider } from "react-redux";

import Counter from "./components/counter";
import Display from "./components/display";

import { store } from "./store/store";
// import createIncrement from "./store/incrementAction";

// store.dispatch(createIncrement(1));
// store.dispatch(createIncrement(1));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
        <Display />
      </Provider>
    </div>
  );
}

export default App;
