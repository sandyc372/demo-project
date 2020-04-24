import React, { Component } from 'react';

export default class ApplicationList extends Component<any, any>{
  render() {
    let selectedApplicationName = this.props.selectedApplication ? this.props.selectedApplication.applicationName : null;
    return (
      <div className="list-group-flush" style={{ maxHeight: window.innerHeight, overflowY: 'scroll'}}>
        {
          this.props.applications.map((application: any, index: number) => (
          <button
            className={`list-group-item list-group-item list-group-item-action text-left ${selectedApplicationName === application.applicationName ? 'active' : ''}`}
            key={index}
            onClick={() => { this.props.handeApplicationSelect(application)}}
          >
            { application.applicationName }
          </button>
          ))
        }
      </div>
    );
  }
}