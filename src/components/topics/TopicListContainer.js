import React from "react";
import TopicList from "./TopicList";
import TopicManyService from "../../services/TopicManyService";

export default class TopicListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic_many: this.props.topic_many, title: "" };
    this.topic_service = new TopicManyService(this.state.topic_many);
  }

  titleChanged = event => {
    this.setState({
      title: event.currentTarget.value
    });
  };

  createTopic = () => {
    let topic_title = this.state.title;
    this.topic_service.createTopic(topic_title);
    this.refreshTopics();
  };

  updateTopic = original_topic => {
    this.topic_service.updateTopic(original_topic, this.state.title);
    this.refreshTopics();
  };

  deleteTopic = topic_to_delete => {
    this.topic_service.deleteTopic(topic_to_delete);
    this.refreshTopics();
  };

  refreshTopics = () => {
    let new_topics = this.topic_service.getTopics();
    this.setState({ topic_many: new_topics, title: "" });
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <input
              value={this.state.title}
              onChange={this.titleChanged}
              placeholder="Topic title"
              className="form-control"
            />
            <button
              onClick={this.createTopic}
              className="btn btn-primary btn-block"
            >
              Create
            </button>
          </li>
            <TopicList
              topic_many={this.state.topic_many}
              updateTopic={this.updateTopic}
              deleteTopic={this.deleteTopic}
              selectTopicIndex={this.props.selectTopicIndex}
            />
        </ul>
      </div>
    );
  }
}
