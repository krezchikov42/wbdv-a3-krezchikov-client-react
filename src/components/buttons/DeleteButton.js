import React from "react";

export default class DeleteButton extends React.Component {
  render() {
    return (
      <button
        type="button"
        className={"btn btn-primary wbdv-row wbdv-button wbdv-deletemx-2" +this.props.className}
        aria-label="Remove Course"
        onClick={() => this.props.delete(this.props.item.id)}
      >
        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </button>
    );
  }
}
