import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { routes } from './config/routes';

export class Routes extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          {
            routes.map((route, index) => (
              <Route path={route.path} key={index}>
                <route.component />
              </Route>
            ))
          }
          <Route>
            <Redirect to="/get" />
          </Route>
        </Switch>
      </Router>
    );
  }
}
