import React from "react";
import PropTypes from "prop-types";
import MoveUpButton from "../buttons/MoveUp";
import MoveDownButton from "../buttons/MoveDown";
import Widget from "./Widget"

export default class ListWidget extends React.Component {
  render() {
    return (
      <Widget title="List Widget"
      preview={this.props.preview} 
      editing_components={this.renderEditingComponenets()}
      preview_componenets={this.renderPreviewComponenets()}
      index={this.props.index}
      length_widgets={this.props.length_widgets}
      widget={this.props.widget}
      moveWidget={this.props.moveWidget}
      updateWidget={this.props.updateWidget}
      deleteWidget={this.props.deleteWidget}
      />
    );
  }

  renderEditingComponenets = () => {
    let order_select_value = this.orderedBoolToString(
      this.props.widget.ordered
    );

    return (
      <div>
        <div className="form-group">
          <textarea
            value={this.props.widget.text}
            onChange={this.changeText}
            className="form-control"
          />
        </div>
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
      </div>
    );
  };

  renderPreviewComponenets = () => {
    return (
    <div>
      {!this.props.widget.ordered && (
        <ul>
          {this.props.widget.text.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {this.props.widget.ordered && (
        <ol>
          {this.props.widget.text.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      )}
    </div>);
  }

  changeTypeList = e => {
    let new_type = this.orderedStringToBool(e.target.value);
    let widget = { ...this.props.widget, ordered: new_type };
    this.props.updateWidget(widget.id, widget);
  };

  orderedStringToBool = order_string => {
    let values_map = { ordered: true, not_ordered: false };
    return values_map[order_string];
  };

  orderedBoolToString = order_bool => {
    let values_map = { true: "ordered", false: "not_ordered" };
    return values_map[order_bool];
  };

  changeText = e => {
    let new_text = e.target.value;
    let widget = { ...this.props.widget, text: new_text };
    this.props.updateWidget(widget.id, widget);
  };
}

ListWidget.propTypes = {
  widget: PropTypes.object.isRequired,
  updateWidget: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  length_widgets: PropTypes.number.isRequired,
  moveWidget: PropTypes.func.isRequired,
  preview: PropTypes.bool.isRequired
};
