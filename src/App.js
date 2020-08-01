import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CheckoutPage from "./components/pages/CheckoutPage";
import LoginPage from "./components/pages/LoginPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Just like a normal Switch statement. Here different Routes 
            Are the different cases for the Switch */}
        <Switch>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          {/* The Default Route */}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
