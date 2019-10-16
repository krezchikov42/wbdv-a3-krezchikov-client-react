import React from "react";
import PropTypes from "prop-types";

export default class MoveUpButton extends React.Component {
  render() {
    return (<div>
        {this.props.should_render && (
            <button
              type="button"
              className="btn btn-primary"
              aria-label="Remove Course"
              onClick={() => this.props.onClick(this.props.index, this.props.index -1)}
            >
              <span className="glyphicon glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
            </button>)}
    </div>);
  }
}

// MoveUpButton.proptypes = {
//     should_render: PropTypes.bool.isRequired,
//     index: PropTypes.number.isRequired,
//     onClick: PropTypes.func.isRequired,
// }