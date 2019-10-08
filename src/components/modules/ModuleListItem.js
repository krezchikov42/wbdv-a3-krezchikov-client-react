import React from "react";

export default class ModuleListItem extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.module.title}
        <div className="float-right">
          <button
            type="button"
            className="btn btn-primary wbdv-row wbdv-button wbdv-edit mx-2"
            aria-label="Remove Course"
            onClick={() => this.props.updateModule(this.props.module.title)}
          >
            <span
              className="glyphicon glyphicon-pencil"
              aria-hidden="true"
            ></span>
          </button>
          <button
            type="button"
            className="btn btn-primary wbdv-row wbdv-button wbdv-deletemx-2"
            aria-label="Remove Course"
          >
            <span
              className="glyphicon glyphicon-remove"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </li>
    );
  }
}
