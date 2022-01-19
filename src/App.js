import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";

const Routing = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
