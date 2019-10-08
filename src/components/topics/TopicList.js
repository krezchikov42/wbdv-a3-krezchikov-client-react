import React from 'react'
import TopicItem from "./TopicItem";

export default class TopicList extends React.Component {
    render() {
        return ( 
        <div>
            <ul className="nav nav-pills" role="tablist">
                {
                    this.props.topic_many.map(topic =>
                        <TopicItem
                            key={topic.id}
                            topic={topic}
                            updateTopic={this.props.updateTopic}
                            deleteTopic={this.props.deleteTopic}/>
                    )
                }
            </ul>
        </div>);
    }
} 