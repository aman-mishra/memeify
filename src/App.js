import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Main from './pages/Main';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/memeify" exact component={Landing} />
        <Route path="/Landing" exact component={Landing} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Main" exact component={Main} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
