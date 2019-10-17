import React from "react";
import PropTypes from "prop-types";
import MoveDownButton from "../buttons/MoveDown";
import MoveUpButton from "../buttons/MoveUp";

export default class Widget extends React.Component {
  render() {
    let should_render_up_button = this.props.index !== 0;
    let should_render_down_button =
      this.props.index < this.props.length_widgets - 1;
    return (
      <div>
        {!this.props.preview && (
          <div>
            <div className="row">
              <div className="col-2">
                <h4>{this.props.title}</h4>
              </div>
              <div className="col-7" />
              <div className="col-3">
                <MoveUpButton
                  should_render={should_render_up_button}
                  index={this.props.index}
                  onClick={this.props.moveWidget}
                />
                <MoveDownButton
                  should_render={should_render_down_button}
                  index={this.props.index}
                  onClick={this.props.moveWidget}
                />
                  <select
                    className="form-control"
                    value={this.props.widget.type}
                    onChange={this.changeTypeWidget}
                  >
                    <option value="LIST">List Widget</option>
                    <option value="HEADING">Header Widget</option>
                    <option value="PARAGRAPH">Paragraph widget</option>
                  </select>
                  <button
        type="button"
        className={"btn btn-danger"}
        aria-label="Remove Course"
        onClick={() => this.props.deleteWidget(this.props.widget.id)}
      >
        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </button>

              </div>
            </div>
            {this.props.editing_components}
            <div className="form-group">
              <input
                className="form-control"
                vale={this.props.widget.name}
                onChange={this.changeWidgetName}
                placeholder="Widget Name"
              />
            </div>
            <h4>Preview</h4>
          </div>
        )}
        {this.props.preview_componenets}
      </div>
    );
  }

  changeTypeWidget =  e => {
    let new_type = e.target.value
    let widget = {...this.props.widget, type: new_type}
    this.props.updateWidget(widget.id, widget)
  }

  changeWidgetName = e => {
    let new_name = e.target.value
    let widget = {...this.props.widget, name: new_name}
    this.props.updateWidget(widget.id, widget)
  }
}

Widget.propTypes = {
  editing_components: PropTypes.element.isRequired,
  preview: PropTypes.bool.isRequired,
  preview_componenets: PropTypes.element.isRequired
};
