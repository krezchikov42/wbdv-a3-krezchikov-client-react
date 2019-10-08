import React from "react";
import EditButton from '../buttons/EditButton'
import DeleteButton from '../buttons/DeleteButton'

export default class ModuleListItem extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.module.title}
        <div className="float-right">
          <EditButton update={this.props.updateModule} item={this.props.module} />
          <DeleteButton delete={this.props.deleteModule} item={this.props.module} />
        </div>
      </li>
    );
  }
}
