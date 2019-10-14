
const initialState = {
    widgets: [
        {type:"LIST", ordered:true, text: "Item 1\nItem 2\nItem 3", id: 123},
        {type:"HEADING", size:6, text: "Hello from Redux", id: 234},
        {type:"PARAGRAPH", text: "Hello from Redux paragraph", id: 345}
    ]
}

const widgetListReducer = (state = initialState, action) => {

    console.log(action)

    switch (action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {
                        type: 'HEADING',
                        size: 2,
                        text: 'New Heading',
                        id: (new Date()).getTime()
                    }
                ]
            }
        default:
            return state
    }
}

export default widgetListReducer;