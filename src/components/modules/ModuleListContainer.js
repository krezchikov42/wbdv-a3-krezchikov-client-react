import React from "react";
import ModuleListItem from "./ModuleListItem";
import ModuleManyService from "../../services/ModuleManyService";

export default class ModuleListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { module_many: this.props.module_many, title: "" };
    this.module_service = new ModuleManyService(this.state.module_many);
  }

  titleChanged = event => {
    this.setState({
      title: event.currentTarget.value
    });
  };

  createModule = () => {
    let module_title = this.state.title;
    this.module_service.createModule(module_title);
    let new_modules = this.module_service.getModules();
    this.setState({module_many: new_modules, title: ''})
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <input
              value={this.state.title}
              onChange={this.titleChanged}
              placeholder="Module title"
              className="form-control"
            />
            <button
              onClick={this.createModule}
              className="btn btn-primary btn-block"
            >
              Create
            </button>
          </li>
          {this.state.module_many.map(module => (
            <ModuleListItem key={module.id} module={module} />
          ))}
        </ul>
      </div>
    );
  }
}
