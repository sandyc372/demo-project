import React from 'react';
import { ISelectorProps, ISelectorOption } from './ISelector';

export class Selector extends React.Component<ISelectorProps, any> {
  render() {
    return (
      <div className="row">
        {
          this.props.options.map((option: ISelectorOption, index: number) => (
            <div className={`col-md-12 text-center ${ index > 0 ? 'mt-4' : ''}`} key={index}>
              <button
                onClick={() => option.onSelect(option.data)}
                type="button"
                className="btn btn-outline-info"
              >
                {option.label}
              </button>
            </div>
          ))
        }
      </div>
    )
  }
}