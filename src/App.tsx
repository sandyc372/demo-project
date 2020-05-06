import React from 'react';
import environments from './config/environments';
import { EnvironmentList } from './components/EnvironmentList/EnvironmentList';
import { EnvironmentContext } from './components/EnvironmentList/EnvironmentContext';
import { Routes } from './Routes';
import { IAppState } from './IApp';
import './App.css';

export default class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      environment: null
    };
  }

  handleEnvironmentSelect(selectedEnvironment: string) {
    console.log(selectedEnvironment)
    this.setState({
      environment: selectedEnvironment
    })
  }

  render() {
    return this.state.environment ? (
      <EnvironmentContext.Provider value={this.state}>
        <Routes />
      </EnvironmentContext.Provider>
    )
    : (
      <div className="App">
        <EnvironmentList
          environments={environments}
          onEnvironmentSelect={(selectedEnvironment: string) => this.handleEnvironmentSelect(selectedEnvironment)}
        />
      </div>
    );
  }
};
