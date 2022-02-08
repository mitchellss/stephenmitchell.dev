import React from 'react';
import TopNavBar from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import SkyPrecision from './Components/SkyPrecision';
import PlayerTrak from './Components/PlayerTrak';
import PersonalWebsite from './Components/PersonalWebsite';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

function App() {
  document.body.style = 'background: #282c34;';
  return (
    <div className="App">
      <Router>
        <TopNavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/projects/skyprecision" exact component={SkyPrecision} />
          <Route path="/projects/playertrak" exact component={PlayerTrak} />
          <Route path="/projects/stephenmitchelldev" exact component={PersonalWebsite} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
