import React from "react";
import Widget from "./Widget";

export default class HeadingWidget extends React.Component {
  render() {
    return (
      <Widget
        title="Heading Widget"
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
    let heading_select_value = this.props.widget.size.toString();
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
            value={heading_select_value}
            onChange={this.changeTypeHeading}
          >
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
            <option value="4">Heading 4</option>
            <option value="5">Heading 5</option>
            <option value="6">Heading 6</option>
          </select>
        </div>
      </div>
    );
  };

  changeTypeHeading = e => {
    let new_heading = e.target.value;
    new_heading = parseInt(new_heading)
    let new_widget = {...this.props.widget, size:new_heading}
    this.props.updateWidget(new_widget.id, new_widget)
  };

  changeText = e => {
    let new_text = e.target.value
    let new_widget = {...this.props.widget, text: new_text}
    this.props.updateWidget(new_widget.id, new_widget)
  }

  renderPreviewComponenets = () => {
    let size = this.props.widget.size;
    return (
      <div>
        {size === 2 && <h2>{this.props.widget.text}</h2>}
        {size === 3 && <h3>{this.props.widget.text}</h3>}
        {size === 4 && <h4>{this.props.widget.text}</h4>}
        {size === 1 && <h1>{this.props.widget.text}</h1>}
        {size === 5 && <h5>{this.props.widget.text}</h5>}
        {size === 6 && <h6>{this.props.widget.text}</h6>}
      </div>
    );
  };
}
