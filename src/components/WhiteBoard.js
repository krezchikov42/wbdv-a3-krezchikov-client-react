import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import WidgetListContainer from "../containers/WidgetListContainer";
import widgetListReducer from "../reducers/widgetListReducer";
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(widgetListReducer)

export default class WhiteBoard extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>White Board</h1>

                    <Provider store={store}>
                        <WidgetListContainer/>
                    </Provider>
                </div>
            </Router>
        )
    }
}
