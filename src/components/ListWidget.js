import React from "react";
import PropTypes from "prop-types";

export default class ListWidget extends React.Component {
  render() {
    console.log('renderList', this.props.widget)
    let order_select_value = this.orderedBoolToString(this.props.widget.ordered)
    return (
      <div>
        <div className="form-group">
          <select
            className="form-control"
            id="typeListSelect"
            value={order_select_value}
            onChange={this.changeTypeList}
          >
            <option value="ordered">Ordered List</option>
            <option value="not_ordered">Unordered List</option>
          </select>
        </div>
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
      </div>
    );
  }

  changeTypeList = e => {
    let new_type = this.orderedStringToBool(e.target.value);
    let widget = { ...this.props.widget, ordered: new_type };
    this.props.updateWidget(widget.id, widget);
  };

  orderedStringToBool = order_string => {
    let values_map = { ordered: true, not_ordered: false };
    return values_map[order_string]
  };

  orderedBoolToString = order_bool => {
      let values_map = {true: "ordered", false: "not_ordered"}
      return values_map[order_bool]
  }
}

ListWidget.propTypes = {
  widget: PropTypes.object,
  updateWidget: PropTypes.func
};
