import React, { Component } from 'react';
import { getApplications } from '../../apis/applicationsApi';
import ApplicationList from '../../components/ApplicationList/ApplicationList';
import ApplicationData from '../../components/ApplicationData/ApplicationData';
import withEnvironment from '../../components/EnvironmentList/withEnvironment';
import { IMainPageProps } from './IMainPage';

export class MainPage extends Component<IMainPageProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      applications: [],
      applicationData: null,
      isLoadingApplications: true,
      selectedApplication: null,
    }
  }

  componentDidMount() {
    getApplications()
      .then((data: any) => {
        data = data.slice();
        this.setState({
          isLoadingApplications: false,
          applications: data
        })
      })
      .catch(() => { })
  }

  handeApplicationSelect(application: any) {
    this.setState({
      selectedApplication: { ...application }
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {
            this.state.isLoadingApplications ? (
              <div className="col-md-12">
                <div className="alert alert-primary" role="alert">
                  Fetching applications...
                </div>
              </div>)
              : (
                <>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-header"> Applications </div>
                      <div className="card-body">
                        <ApplicationList
                          applications={this.state.applications}
                          selectedApplication={this.state.selectedApplication}
                          handeApplicationSelect={(arg: any) => { this.handeApplicationSelect(arg) }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    {
                      this.state.selectedApplication ?
                        (
                          <div className="card">
                            <div className="card-header">{this.state.selectedApplication.applicationName}</div>
                            <div className="card-body">
                              <ApplicationData
                                selectedApplication={this.state.selectedApplication}
                              />
                            </div>
                          </div>
                        )
                        : null
                    }
                  </div>
                </>
              )
          }
        </div>
      </div >
    )
  }
}

export default withEnvironment(MainPage);