import React from "react";
import WidgetListComponent from "../components/widgets/WidgetListComponent";
import { connect } from "react-redux";
import WidgetService from "../services/WidgetService";
const widget_service = WidgetService.getInstance();

const stateToPropertyMapper = state => {
  return {
    widgets: state.widgets,
    widget_type_create: state.widget_type_create,
    preview: state.preview
  };
};

const dispatcherToPropertyMapper = dispatch => {
  return {
    addWidget: () => {
      dispatch({ type: "CREATE_WIDGET" });
    },
    deleteWidget: id => {
      dispatch({ type: "DELETE_WIDGET", widgetId: id });
    },
    changeWidgetTypeToCreate: event => {
      dispatch({ type: "CHANGE_TO_CREATE", widget_type: event.target.value });
    },
    updateWidget: (widget_id, widget) => {
      dispatch({ type: "UPDATE_WIDGET", widget: widget, widget_id: widget_id });
    },
    changePreview: event => {
      dispatch({ type: "CHANGE_TO_PREVIEW", preview: event.target.checked });
    },
    moveWidget: (old_index, new_index) => {
      dispatch({
        type: "MOVE_WIDGET",
        old_index: old_index,
        new_index: new_index
      });
    },
    findAllWidgets: () =>
      widget_service
        .findAllWidgets()
        .then(widgets =>
          dispatch({ type: "FIND_ALL_WIDGETS", widgets: widgets })
        )
  };
};

const WidgetListContainer = connect(
  stateToPropertyMapper,
  dispatcherToPropertyMapper
)(WidgetListComponent);

export default WidgetListContainer;
