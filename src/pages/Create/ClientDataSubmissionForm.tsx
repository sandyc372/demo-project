import React from 'react';

export default class ClientDataSubmissionForm extends React.Component<any, any> {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span>
            {`Onboard client data for ${this.props.selectedApplication.applicationName}`}
          </span>
        </div>
        <div className="card-body">
          submit
        </div>
      </div>
    )
  }
}