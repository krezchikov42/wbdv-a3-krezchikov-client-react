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
    // let module_title = this.state.title;
    // this.module_service.createModule(module_title);
    // this.refreshModules();
  };

  updateModule = mod_id => {
    // this.module_service.updateModule(mod_id, this.state.title);
    // this.refreshModules();
  };

  deleteModule = mod_id => {
    // this.module_service.deleteModule(mod_id);
    this.refreshModules();
  };

  refreshModules = () => {
    // let new_modules = this.module_service.getModules();
    // this.setState({ module_many: new_modules, title: "" });
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
          {this.state.module_many.map((module, index) => (
            <ModuleListItem
              key={module.id}
              module={module}
              updateModule={this.updateModule}
              deleteModule={this.deleteModule}
              selectModuleIndex={() => this.props.selectModuleIndex(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
