import React from 'react';
import { Route, Link } from 'react-router-dom';
import { routes } from '../../config/routes';

export function NavBar(props: any) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {
            routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                children={({ match }) => (
                  <li className={`nav-item ${match ? "border border-primary rounded-lg" : ''}`}>
                    <span className="nav-link"><Link to={route.path}>{route.label}</Link></span>
                  </li>
                )}
              />
            ))
          }
        </ul>
      </div>
    </nav>

  )
}