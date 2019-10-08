import React from "react";
 
export default class EditButton extends React.Component {
    render () {
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
    }
}