import React from 'react';
import environments from './config/environments';
import { EnvironmentList } from './components/EnvironmentList/EnvironmentList';
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
    return (
      <div className="App">
        <EnvironmentList
          environments={environments}
          onEnvironmentSelect={(selectedEnvironment: string) => this.handleEnvironmentSelect(selectedEnvironment)}
        />
      </div>
    );
  }
};
