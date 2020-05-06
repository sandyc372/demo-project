import React from 'react';
import { EnvironmentContext } from './EnvironmentContext';

export default function (WrappedComponent: React.ComponentType<any>) {
  return function() {
    return (
      <EnvironmentContext.Consumer>
        {
          ({ environment }) => (
            <WrappedComponent environment={environment} />
          )
        }
      </EnvironmentContext.Consumer>
    )
  }
}