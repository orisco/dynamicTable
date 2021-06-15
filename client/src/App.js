import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage.component";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
