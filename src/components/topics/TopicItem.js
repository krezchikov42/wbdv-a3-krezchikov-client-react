import React from "react";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

export default class TopicListItem extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.topic.title}
        <div className="float-right">
          <EditButton update={this.props.updateTopic} title={this.props.topic.title} />
          <DeleteButton delete={this.props.deleteTopic} title={this.props.topic.title} />
        </div>
      </li>
    );
  }
}
