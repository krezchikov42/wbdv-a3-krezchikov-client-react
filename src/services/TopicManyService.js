export default class TopicManyService {
    constructor(topic_many){
        this.id = 0
        this.topic_many = topic_many
    }

    createTopic(topic_title){
        if (topic_title == ''){
            topic_title = 'New Topic'
        }
        let topic = {
            title: topic_title,
            lessons: [],
            id: this.id
        }
        this.topic_many.push(topic)
        this.id += 1
    }

    deleteTopic(topic_id) {
        this.topic_many =  this.topic_many.filter(topic => topic.id !== topic_id);
    }

    updateTopic(topic_id, new_topic_title) {
        let found_topic_index = this.topic_many.findIndex(topic => topic.id === topic_id);
        this.topic_many[found_topic_index].title = new_topic_title;
    }

    getTopics() {
        return this.topic_many
    }
}