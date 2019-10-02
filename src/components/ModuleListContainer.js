import React from 'react'
import ModuleListItem from "./ModuleListItem";

export default class ModuleListContainer
    extends React.Component {
    constructor(props) {
        super(props)
        // this.titleChanged = this.titleChanged.bind(this)
        // this.createModule = this.createModule.bind(this)
        this.state = {
            newModule: {
                title: ''
            },
            modules: [
                {
                    title: 'Module 1', id: 123,
                    lessons: [
                        {title: 'Lesson 1.1', id: 123, selected: true},
                        {title: 'Lesson 1.2', id: 234},
                        {title: 'Lesson 1.3', id: 345},
                        {title: 'Lesson 1.4', id: 456},
                    ]
                },
                {title: 'Module 2', id: 234},
                {title: 'Module 3', id: 345},
            ]
        }
    }

    titleChanged = (event) => {
        // this.state.newModule.title = event.currentTarget.value
        this.setState({
            newModule: {
                title: event.currentTarget.value,
                id: (new Date()).getTime()
            }
        })
    }

    createModule = () => {
        this.setState(prevState => ({
            newModule: {
                title: ''
            },
            modules: [
                ... prevState.modules,
                prevState.newModule
            ]
        }))
    }

    render() {
        return(
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            value={this.state.newModule.title}
                            onChange={this.titleChanged}
                            placeholder="Module title" className="form-control"/>
                        <button onClick={this.createModule} className="btn btn-primary btn-block">Create</button>
                    </li>
                    {
                        this.state.modules.map(module =>
                            <ModuleListItem
                                key={module.id}
                                module={module}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}