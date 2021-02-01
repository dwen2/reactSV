import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Pages/About/AboutPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <About />
      </Route>
    </Switch>
  );
}