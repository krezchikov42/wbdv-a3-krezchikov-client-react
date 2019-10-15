import React from "react";
import PropTypes from 'prop-types';

export default class ListWidget extends React.Component {
  render() {
    return (
      <div>
        {!this.props.widget.ordered && (
          <ul>
            {this.props.widget.text.split("\n").map(item => (
              <li>{item}</li>
            ))}
          </ul>
        )}
        {this.props.widget.ordered && (
          <ol>
            {this.props.widget.text.split("\n").map(item => (
              <li>{item}</li>
            ))}
          </ol>
        )}
      </div>
    );
  }
}

ListWidget.PropTypes = {
    widget: PropTypes.object,
}