import React from 'react';
import { IMasterClientSelectorProps } from './IMasterClientSelector';

export class MasterClientSelector extends React.Component<IMasterClientSelectorProps, any> {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <button
            onClick={() => this.props.onMasterSelect()}
            type="button"
            className="btn btn-outline-info"
          >
            { this.props.masterButtonText }
          </button>
        </div>
        <div className="col-md-12 mt-4 text-center">
          <button
            onClick={() => this.props.onClientSelect()}
            type="button"
            className="btn btn-outline-info"
          >
            { this.props.clientButtonText }
          </button>
        </div>
      </div>
    )
  }
}