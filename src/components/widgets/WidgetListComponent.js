import React from "react";
import PropTypes from "prop-types";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";

export default class WidgetListComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Widget list</h2>
        <div className="form-group">
          <select
            className="form-control"
            id="widgetSelectForm"
            value={this.props.widget_type_create}
            onChange={this.props.changeWidgetTypeToCreate}
          >
            <option value="LIST">List Widget</option>
            <option value="HEADING">Header Widget</option>
            <option value="PARAGRAPH">Paragraph widget</option>
          </select>
        </div>
        <button onClick={this.props.addWidget}>Add Widget</button>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            checked={this.props.preview}
            onChange={this.props.changePreview}
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            Toggle this switch element
          </label>
        </div>
        <ul>
          {this.props.widgets.map((widget, index) => (
            <li key={widget.id}>
              {widget.type === "LIST" && (
                <ListWidget
                  widget={widget}
                  updateWidget={this.props.updateWidget}
                  preview={this.props.preview}
                  index={index}
                  length_widgets = {this.props.widgets.length}
                  moveWidget = {this.props.moveWidget}
                />
              )}
              {widget.type === "HEADING" && <HeadingWidget widget={widget} />}
              {widget.type === "PARAGRAPH" && (
                <ParagraphWidget widget={widget} />
              )}
              <button onClick={() => this.props.deleteWidget(widget.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

WidgetListComponent.propTypes = {
  widgets: PropTypes.array.isRequired,
  widget_type_create: PropTypes.string.isRequired,
  addWidget: PropTypes.func.isRequired,
  deleteWidget: PropTypes.func.isRequired,
  changeWidgetTypeToCreate: PropTypes.func.isRequired,
  updateWidget: PropTypes.func.isRequired,
  preview: PropTypes.bool.isRequired,
  changePreview: PropTypes.func.isRequired,
  moveWidget: PropTypes.func.isRequired
};
