import {replaceAt} from '../utils/utils'
import cloneDeep from 'lodash/cloneDeep';

const initialState = {
  widgets: [
    { type: "LIST", ordered: true, text: "Item 1\nItem 2\nItem 3", id: 123 },
    { type: "HEADING", size: 6, text: "Hello from Redux", id: 234 },
    { type: "PARAGRAPH", text: "Hello from Redux paragraph", id: 345 }
  ],
  widget_type_create: "LIST",
  preview: false,
};

const widgetListReducer = (state = initialState, action) => {

  switch (action.type) {
    case "DELETE_WIDGET":
      return {
        ...state,
        widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
      };
    case "CREATE_WIDGET":
      return {
        ...state,
        widgets: [
          ...state.widgets,
          {
            type: state.widget_type_create,
            size: 1,
            text: "Default Text",
            id: new Date().getTime()
          }
        ]
      };
    case "CHANGE_TO_CREATE":
      return {
        ...state,
        widget_type_create: action.widget_type
      };
    case "CHANGE_TO_PREVIEW":
        return {
            ...state,
            preview: action.preview
        }
    case "UPDATE_WIDGET":
      let widget_new = action.widget;
      let found_module_index = state.widgets.findIndex(
        widget_one => widget_one.id === action.widget_id
      );
      let widget_many_new = replaceAt(state.widgets,found_module_index,widget_new)
      return {...state,
                widgets: widget_many_new};
    case "MOVE_WIDGET":
        let widget_many = cloneDeep(state.widgets)
        let old_index = action.old_index
        let new_index = action.new_index
        if (new_index < 0 || new_index >= widget_many.length){
            console.log('Trying to move widget to index that does not exist')
            return state
        }

        let copy_widget = cloneDeep(widget_many[new_index])
        widget_many[new_index] = widget_many[old_index]
        widget_many[old_index] = copy_widget
        return {...state,
                widgets: widget_many}
    default:
      return state;
  }
};

export default widgetListReducer;
