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
          <form>
            <div className="form-group">
              <label>Application Name</label>
              <input type="text" className="form-control" disabled={true} value={this.props.selectedApplication.applicationName} />
            </div>
            <div className="form-group">
              <label>Client Id</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Data</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>
          </form>
        </div>
      </div>
    )
  }
}