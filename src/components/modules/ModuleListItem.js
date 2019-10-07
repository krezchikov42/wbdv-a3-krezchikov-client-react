import React from "react";

const ModuleListItem = ({ module }) => (
  <li className="list-group-item">
    {module.title}
    <div className="float-right">
      <button
        type="button"
        className="btn btn-primary wbdv-row wbdv-button wbdv-edit mx-2"
        aria-label="Remove Course"
        //   onClick={this.removeClass}
      >
        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
      </button>
      <button
        type="button"
        className="btn btn-primary wbdv-row wbdv-button wbdv-deletemx-2"
        aria-label="Remove Course"
        //   onClick={this.removeClass}
      >
        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </button>
    </div>
  </li>
);

export default ModuleListItem;
