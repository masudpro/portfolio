import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import './responsive.css'
import Banner from './Components/Banner/Banner';
import Home from './FrontPage/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="fullBody">
  <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
    </div>
   
  );
}

export default App;
