import React from 'react';
import { Selector } from '../../components/Selector/Selector';
import withEnvironment from '../../components/EnvironmentList/withEnvironment';

export class CreatePage extends React.Component<any, any> {
  render() {
    return (
      <div className="container-fluid">
        <Selector
          options={[{
            label: 'Onboard application data',
            onSelect: () => void 0
          }, {
            label: 'Onboard master data',
            onSelect: () => void 0
          }, {
            label: 'Onboard client data',
            onSelect: () => void 0
          }]}
        />
      </div>
    )
  }
}

export default withEnvironment(CreatePage);