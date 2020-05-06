import React from 'react';
import withEnvironment from '../../components/EnvironmentList/withEnvironment';

export class CreatePage extends React.Component<any, any> {
  render() {
    return 'Create' + this.props.environment
  }
}

export default withEnvironment(CreatePage);