import React from "react";
import Widget from "./Widget";

export default class HeadingWidget extends React.Component {
  render() {
    return (
      <Widget
        title="Paragraph Widget"
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
    return (
      <div className="form-group">
        <textarea
          value={this.props.widget.text}
          onChange={this.changeText}
          className="form-control"
        />
      </div>
    );
  };

  changeText = e => {
    let new_text = e.target.value;
    let widget = { ...this.props.widget, text: new_text };
    this.props.updateWidget(widget.id, widget);
  };

  renderPreviewComponenets = () => {
    return <p>{this.props.widget.text}</p>;
  };
}
