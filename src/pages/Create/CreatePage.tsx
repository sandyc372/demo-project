import React from 'react';
import { Selector } from '../../components/Selector/Selector';
import { ISelectorOption } from '../../components/Selector/ISelector';
import ClientOnboarder from './ClientOnboarder';
import withEnvironment from '../../components/EnvironmentList/withEnvironment';
import { DATA_TYPES } from '../../config/constants';

export class CreatePage extends React.Component<any, any> {

  public selectorOptions: ISelectorOption[];
  constructor(props: any) {
    super(props);
    this.state = {
      dataType: null
    };
    this.selectorOptions = [{
      label: 'Onboard application data',
      onSelect: () => this.setDataType(DATA_TYPES.APPLICATION_DATA)
    }, {
      label: 'Onboard master data',
      onSelect: () => this.setDataType(DATA_TYPES.MASTER_DATA)
    }, {
      label: 'Onboard client data',
      onSelect: () => this.setDataType(DATA_TYPES.CLIENT_DATA)
    }]
  }

  setDataType(dataType: DATA_TYPES) {
    this.setState({
      dataType
    })
  }

  renderSelector() {
    return (
      <Selector
        options={this.selectorOptions}
      />
    )
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.dataType === null ? this.renderSelector() : null}
        {
          this.state.dataType === DATA_TYPES.CLIENT_DATA
            ? (
              <div className="row">
                <ClientOnboarder />
              </div>
            )
            : null
        }
      </div>
    )
  }
}

export default withEnvironment(CreatePage);