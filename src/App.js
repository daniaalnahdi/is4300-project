import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//View
import HomeView from './views/HomeView';
import RaisedHandsView from './views/RaisedHandsView';
import ReactionsView from './views/ReactionsView';
import PickStudentView from './views/PickStudentView';

const App = () => {
  return (
    <Router>
      <h1>Conference Co-Pilot</h1>
      <Switch>
        <Route path='/raised-hands'>
          <RaisedHandsView />
        </Route>
        <Route path='/reactions'>
          <ReactionsView />
        </Route>
        <Route path='/pick-student'>
          <PickStudentView />
        </Route>
        <Route path='/'>
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
