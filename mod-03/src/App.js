import React from "react";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Cat from "./components/Cat";
import Dog from "./components/Dog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/cat">Cat</Link>
          &nbsp;
          <Link to="/dog">Dog</Link>
        </header>
        <Switch>
          <Route path="/cat/:catName" component={Cat} />
          <Route path="/cat" component={Cat} />
          <Route path="/dog" component={Dog} />
          <Route path="/" exact render={() => <div>The home page</div>} />
          <Route render={() => <div>Page not found</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
