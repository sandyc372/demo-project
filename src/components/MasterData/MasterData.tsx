import React from 'react';
import { getApplicationData } from '../../apis/applicationDataApi';
import { Result, Error } from '../ApplicationData/ApplicationData'

export class MasterData extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null,
      isFetching: false,
      error: null
    }
  }

  componentDidMount() {
    this.getMasterData();
  }

  getMasterData() {
    this.setState({
      isFetching: true,
      result: null,
      error: null
    })
    getApplicationData('', this.props.selectedApplication.applicationName)
      .then((data: any) => {
        this.setState({
          data: data,
          isFetching: false,
          error: null
        })
      })
      .catch((e) => {
        this.setState({
          data: null,
          isFetching: false,
          error: e
        })
      })
  }

  render() {
    return this.state.data ?
      (<Result data={this.state.data} />)
      : this.state.isFetching ?
        (<div className="alert alert-primary" role="alert">
          Fetching data...
        </div>)
        : this.state.error ? (<Error />) : null

  }
}