import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavMenu from './NavMenu'
import FinanceProgress from './pages/FinanceProgress'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/progress" component={FinanceProgress} />
        <Route path="/about" component={FinanceProgress} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
