import React from "react";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

export default class TopicListItem extends React.Component {
  render() {
    return (
      <li className="list-group-item list-group-item-action" onClick={() => this.props.selectTopicIndex()}>
        {this.props.topic.title}
        <div className="float-right">
          <EditButton update={this.props.updateTopic} item={this.props.topic} />
          <DeleteButton delete={this.props.deleteTopic} item={this.props.topic} />
        </div>
      </li>
    );
  }
}
