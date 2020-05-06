import React from 'react';
import { IAppState } from '../../IApp';

export const EnvironmentContext = React.createContext({
  environment: undefined
} as IAppState);