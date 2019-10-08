import React from "react";

export default class EditButton extends React.Component {
  render() {
    return (
      <button
        type="button"
        className="btn btn-primary wbdv-row wbdv-button wbdv-deletemx-2"
        aria-label="Remove Course"
        onClick={() => this.props.delete(this.props.title)}
      >
        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </button>
    );
  }
}
