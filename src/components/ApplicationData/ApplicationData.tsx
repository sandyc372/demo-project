import React, { Component } from 'react';
import { getApplicationData } from '../../apis/applicationDataApi';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import { Selector } from '../Selector/Selector';
import { MasterData } from '../MasterData/MasterData';
import { DATA_TYPES } from '../../config/constants';

const Form = React.forwardRef((props: any, ref: any) => {
  return (
    <form onSubmit={(event) => {
      props.onSubmit();
      event.preventDefault();
    }}>
      <div className="input-group input-group-lg mb-3">
        <input type="text" ref={ref} className="form-control" placeholder="Enter client Id" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">Search</button>
        </div>
      </div>
    </form>
  );
})

export function Result(props: any) {
  return (
    <div style={{ textAlign: 'left', overflowY: 'scroll', maxHeight: window.innerHeight }}>
      <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
    </div>
  )
}

export function Error(props: any) {
  return (
    <div className="alert alert-danger" role="alert">
      An error occurred
    </div>
  )
}

export default class ApplicationData extends Component<any, any>{
  public ref: any;
  constructor(props: any) {
    super(props);
    this.state = {
      clientId: null,
      result: null,
      isLoadingResult: false,
      dataType: null
    }
    this.ref = React.createRef();
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.selectedApplication.applicationName !== prevProps.selectedApplication.applicationName) {
      this.resetState();
    }
  }

  handleFormSubmit() {
    this.setState({
      isLoadingResult: true,
      result: null,
      error: null
    })
    getApplicationData(this.ref.current.value, this.props.selectedApplication.applicationName)
      .then((data: any) => {
        this.setState({
          result: data,
          isLoadingResult: false,
          error: null
        })
      })
      .catch((e) => {
        this.setState({
          result: null,
          isLoadingResult: false,
          error: e
        })
      })
  }

  handleBack() {
    this.resetState();
  }

  resetState() {
    this.setState({
      clientId: null,
      result: null,
      isLoadingResult: false,
      dataType: null
    })
  }

  setDataType(dataType: DATA_TYPES) {
    this.setState({
      dataType
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span>{this.props.selectedApplication.applicationName}</span>
          {
            this.state.dataType !== null ? (
              <button
                className="btn btn-sm btn-info float-right"
                onClick={() => this.handleBack()}
              >
                Back
              </button>
            ) : null
          }
        </div>
        <div className="card-body">
          {
            this.state.dataType === null ?
              (
                <Selector
                  options={[{
                    label: 'Get client data',
                    onSelect: () => { this.setDataType(DATA_TYPES.CLIENT_DATA) }
                  }, {
                    label: 'Get master data',
                    onSelect: () => { this.setDataType(DATA_TYPES.MASTER_DATA) }
                  }]}
                />
              )
              : this.state.dataType === DATA_TYPES.MASTER_DATA ?
                (<MasterData selectedApplication={this.props.selectedApplication} />)
                : (
                  <>
                    <Form
                      ref={this.ref}
                      onSubmit={() => { this.handleFormSubmit() }}
                    />
                    {
                      this.state.result ?
                        (<Result data={this.state.result} />)
                        : this.state.isLoadingResult ?
                          (<div className="alert alert-primary" role="alert">
                            Fetching data...
                          </div>)
                          : this.state.error ? (<Error />) : null
                    }
                  </>
                )
          }
        </div>
      </div>
    )
  }
}