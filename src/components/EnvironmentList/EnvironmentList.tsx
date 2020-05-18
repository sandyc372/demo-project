import React from 'react';
import { IEnvironmentProps } from './IEnvironmentList';

function renderEnvironments(environemnts: any, onEnvironmentSelect: (selectedEnvironment: string) => void): React.ReactElement[] {
  let list = [];
  for (let property in environemnts) {
    list.push(
      <button
        className={`list-group-item list-group-item-action`}
        key={environemnts[property]}
        onClick={() => { onEnvironmentSelect(environemnts[property]) }}
      >
        {environemnts[property]}
      </button>
    )
  }
  return list;
}

export const EnvironmentList: React.FC<IEnvironmentProps> = function (props: IEnvironmentProps) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card mt-5">
            <h6 className="card-header">Please select your environment</h6>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {renderEnvironments(props.environments, props.onEnvironmentSelect)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
