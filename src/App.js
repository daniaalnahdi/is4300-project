import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//View
import HomeView from './views/HomeView';
import RaisedHandsView from './views/RaisedHandsView';
import ReactionsView from './views/ReactionsView';
import PickStudentView from './views/PickStudentView';

const App = () => {
  return (
    <div className='center'>
      <div className='container'>
        <header>
          <h1 className='is-size-4 has-text-weight-medium has-text-grey-light	'>
            Conference Co-Pilot
          </h1>
        </header>
        <Router basename="/is4300-project">
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
      </div>
    </div>
  );
};

export default App;
