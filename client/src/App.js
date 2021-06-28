import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homepage.component";
import SentSuccess from "./pages/sentSuccess/sentSuccess.component";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/sentsuccess" exact component={SentSuccess} />
      </Switch>
    </div>
  );
}

export default App;
