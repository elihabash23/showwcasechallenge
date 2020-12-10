import React from 'react';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import MainScreen from './pages/MainScreen/MainScreen';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/education">
              <MainScreen />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
