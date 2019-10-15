import React from "react";
import PropTypes from "prop-types";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";

export default class WidgetListComponent extends React.Component {
  render() {
    return (<div>
      <h2>Widget list</h2>
      <div className="form-group">
        <select className="form-control" id="widgetSelectForm" value={widget_type_create} onChange={changeWidgetTypeToCreate}>
          <option value="LIST">List Widget</option>
          <option value="HEADING">Header Widget</option>
          <option value="PARAGRAPH">Paragraph widget</option>
        </select>
      </div>
      <button onClick={addWidget}>Add Widget</button>
  
      <ul>
        {widgets.map(widget => (
          <li>
            {widget.type === "LIST" && <ListWidget widget={widget} updateWidget={updateWidget}/>}
            {widget.type === "HEADING" && <HeadingWidget widget={widget} />}
            {widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget} />}
            <button onClick={() => deleteWidget(widget.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>);
  }
}

WidgetListComponent.propTypes = {
  widgets: PropTypes.array,
  widget_type_create: PropTypes.string,
  addWidget: PropTypes.func,
  deleteWidget: PropTypes.func,
  changeWidgetTypeToCreate: PropTypes.func,
  updateWidget: PropTypes.func
};
