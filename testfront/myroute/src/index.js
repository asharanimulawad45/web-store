import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router} from "react-router-dom";
import "./index.css";
import App from "./App";
import User from "./user";
import visit from "./visit";

const routing = (
  <Router>
      <Route path="/" component={App} />
      <Route path="/user" component={User} />
      <Route path="/visit" component={visit} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

