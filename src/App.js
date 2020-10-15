import React from 'react';
import TopNavBar from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Router>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
