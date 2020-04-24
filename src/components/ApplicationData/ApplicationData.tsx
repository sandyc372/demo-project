import React, { Component } from 'react';
import { getApplicationData } from '../../apis/applicationDataApi';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

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

function Result(props: any) {
  return (
    <div style={{ textAlign: 'left', overflowY: 'scroll', maxHeight: window.innerHeight }}>
      <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
    </div>
  )
}

function Error(props: any) {
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
      isLoadingResult: false
    }
    this.ref = React.createRef();
  }

  handleFormSubmit() {
    this.setState({
      isLoadingResult: true
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

  render() {
    return (
      <>
        {
          this.state.result ?
            (<Result data={this.state.result} />)
            : (
              this.state.isLoadingResult ?
                (<div className="alert alert-primary" role="alert">
                  Fetching data...
                </div>)
                : (
                  <Form
                    ref={this.ref}
                    onSubmit={() => { this.handleFormSubmit() }}
                  />
                )
            )
        }
        {
          this.state.error ? (<Error />) : null
        }
      </>
    )


  }
}