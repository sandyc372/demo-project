import React from 'react';
import { EnvironmentContext } from '../../components/EnvironmentList/EnvironmentContext';

export class CreatePage extends React.Component<any, any> {
  render() {
    return 'Create' + this.props.environment
  }
}

export default function (props: any) {
  return (
    <EnvironmentContext.Consumer>
      {
        ({ environment }) => (
          <CreatePage environment={environment} />
        )
      }
    </EnvironmentContext.Consumer>
  )
}