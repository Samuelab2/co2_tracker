import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from '../components/NotFound';
import Home from '../pages/Home';

const App = () => (
  <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/forecast' component={Forecast} /> */}
        <Route component={NotFound} />
      </Switch>
  </Router>
);

export default App;
