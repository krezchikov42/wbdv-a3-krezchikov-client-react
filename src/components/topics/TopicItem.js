import React from "react";
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";

export default class TopicListItem extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        {this.props.topic.title}
        <div className="float-right">
          <EditButton update={this.props.updateTopic} title={topic.title} />
          <DeleteButton delete={this.props.deleteTopic} title={topic.title} />
        </div>
      </li>
    );
  }
}
