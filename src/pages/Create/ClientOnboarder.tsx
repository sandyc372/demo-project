import React from 'react';
import ApplicationList from '../../components/ApplicationList/ApplicationList';
import ClientDataSubmissionForm from './ClientDataSubmissionForm';
import withEnvironment from '../../components/EnvironmentList/withEnvironment';
import { getApplications } from '../../apis/applicationsApi';

class ClientOnboarder extends React.Component<any, any> {
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
      this.state.isLoadingApplications ? (
        <div className="col-md-12">
          <div className="alert alert-primary" role="alert">
            Fetching applications...
          </div>
        </div>)
        : this.state.applications && this.state.applications.length > 0 ?
          (
            <>
              <div className="col-md-4">
                <ApplicationList
                  applications={this.state.applications}
                  selectedApplication={this.state.selectedApplication}
                  handeApplicationSelect={(arg: any) => { this.handeApplicationSelect(arg) }}
                />
              </div>
              <div className="col-md-8">
                {
                  this.state.selectedApplication ?
                    (
                      <ClientDataSubmissionForm
                        selectedApplication={this.state.selectedApplication}
                      />
                    )
                    : null
                }
              </div>
            </>
          ) : null
    )
  }
}

export default withEnvironment(ClientOnboarder);