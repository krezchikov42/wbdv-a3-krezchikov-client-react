import React from "react";
import WidgetListComponent from "../components/widgets/WidgetListComponent";
import { connect } from "react-redux";
import WidgetService from "../services/WidgetService";
const widget_service = WidgetService.getInstance();

const stateToPropertyMapper = state => {
  return {
    widgets: state.widgets,
    widget_type_create: state.widget_type_create,
    preview: state.preview,
    topicId: state.topicId
  };
};

const dispatcherToPropertyMapper = dispatch => {
  return {
    createWidget: (topicId, type) => {
      let widget = {
        type: type,
        size: 1,
        text: "Default Text"
      };
      widget_service
        .createWidget(topicId, widget)
        .then(widgets => dispatch({ type: "CREATE_WIDGET", widgets: widgets }));
    },
    deleteWidget: id => {
      widget_service
        .deleteWidget(id)
        .then(widgets => dispatch({ type: "DELETE_WIDGET", widgets: widgets }));
    },
    changeWidgetTypeToCreate: event => {
      dispatch({ type: "CHANGE_TO_CREATE", widget_type: event.target.value });
    },
    updateWidget: (widget_id, widget) => {
      widget_service
        .updateWidget(widget_id, widget)
        .then(widgets => dispatch({ type: "UPDATE_WIDGET", widgets: widgets }));
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
        ),
    findWidgets: topicId =>
      widget_service
        .findWidgets(topicId)
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
