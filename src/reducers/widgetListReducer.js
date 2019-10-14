
const initialState = {
    widgets: [
        {type:"LIST", ordered:true, text: "Item 1\nItem 2\nItem 3", id: 123},
        {type:"HEADING", size:6, text: "Hello from Redux", id: 234},
        {type:"PARAGRAPH", text: "Hello from Redux paragraph", id: 345}
    ],
    widget_type_create: "LIST"
}

const widgetListReducer = (state = initialState, action) => {

    console.log(action)

    switch (action.type) {
        case 'DELETE_WIDGET':
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case 'CREATE_WIDGET':
            console.log('CREATE_WIDGET',state)
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    {
                        type: state.widget_type_create,
                        size: 1,
                        text: 'Default Text',
                        id: (new Date()).getTime()
                    }
                ]
            }
        case 'CHANGE_TO_CREATE':
            console.log("CHANGE_TO_CREATE", state)
            return {
                ...state,
                widget_type_create: action.widget_type
            }
        default:
            return state
    }
}

export default widgetListReducer;