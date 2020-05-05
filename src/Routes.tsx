import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import MainPage from './pages/Get/MainPage';

export class Routes extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Route
                path='/get'
                children={({ match }) => (
                  <li className={`nav-item ${match ? "border border-primary rounded-lg" : ''}`}>
                    <span className="nav-link"><Link to="/get">Get</Link></span>
                  </li>
                )}
              />
              <Route
                path='/create'
                children={({ match }) => (
                  <li className={`nav-item ${match ? "border border-primary rounded-lg" : ''}`}>
                    <span className="nav-link"><Link to="/create">Create</Link></span>
                  </li>
                )}
              />
              <Route
                path='/update'
                children={({ match }) => (
                  <li className={`nav-item ${match ? "border border-primary rounded-lg" : ''}`}>
                    <span className="nav-link"><Link to="/update">Update</Link></span>
                  </li>
                )}
              />
              <Route
                path='/delete'
                children={({ match }) => (
                  <li className={`nav-item ${match ? "border border-primary rounded-lg" : ''}`}>
                    <span className="nav-link"><Link to="/delete">Delete</Link></span>
                  </li>
                )}
              />
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/get">
            <MainPage />
          </Route>
          <Route path="/create">
            <div> create </div>
          </Route>
          <Route path="/update">
            <div> update </div>
          </Route>
          <Route path="/delete">
            <div> delete </div>
          </Route>
          <Route>
            <Redirect to="/get" />
          </Route>
        </Switch>
      </Router>
    );
  }
}
