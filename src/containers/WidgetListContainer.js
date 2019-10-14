import React from 'react'
import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from 'react-redux'

const stateToPropertyMapper = state => {
    return {
        widgets: state.widgets,
        widget_type_create:  state.widget_type_create
    }
}

const dispatcherToPropertyMapper = dispatch => {
    return {
        addWidget: () => {
            dispatch({type: 'CREATE_WIDGET'})
        },
        deleteWidget: (id) => {
            dispatch({type: 'DELETE_WIDGET', widgetId: id})
        },
        changeWidgetTypeToCreate: (event) => {
            dispatch({type: 'CHANGE_TO_CREATE', widget_type: event.target.value})
        }
    }
}

const WidgetListContainer =
    connect(stateToPropertyMapper,
        dispatcherToPropertyMapper)
    (WidgetListComponent)

export default WidgetListContainer;