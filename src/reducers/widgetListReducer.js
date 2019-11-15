import { replaceAt } from "../utils/utils";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
  widgets: [
  ],
  widget_type_create: "LIST",
  preview: false
};

const widgetListReducer = (state=initialState, action) => {
  switch (action.type) {
    case "DELETE_WIDGET":
    case "UPDATE_WIDGET":
    case "CREATE_WIDGET":
    case "FIND_ALL_WIDGETS":
      return {
        ...state,
        widgets: action.widgets,
      }
     
    case "CHANGE_TO_CREATE":
      return {
        ...state,
        widget_type_create: action.widget_type
      };
    case "CHANGE_TO_PREVIEW":
      return {
        ...state,
        preview: action.preview
      };
    case "MOVE_WIDGET":
      let widget_many = cloneDeep(state.widgets);
      let old_index = action.old_index;
      let new_index = action.new_index;
      if (new_index < 0 || new_index >= widget_many.length) {
        console.log("Trying to move widget to index that does not exist");
        return state;
      }

      let copy_widget = cloneDeep(widget_many[new_index]);
      widget_many[new_index] = widget_many[old_index];
      widget_many[old_index] = copy_widget;
      return { ...state, widgets: widget_many };
    default:
      return state;
  }
};

export default widgetListReducer;
