export default class LessonManyService {
    constructor(lesson_many){
        this.id = 0
        this.lesson_many = lesson_many
    }

    createLesson(lesson_title){
        if (lesson_title == ''){
            lesson_title = 'New Lesson'
        }
        let lesson = {
            title: lesson_title,
            lessons: [],
            id: this.id
        }
        this.lesson_many.push(lesson)
        this.id += 1
    }

    deleteLesson(lesson_id) {
        this.lesson_many =  this.lesson_many.filter(lesson => lesson.id !== lesson_id);
    }

    updateLesson(lesson_id, new_lesson_title) {
        let found_lesson_index = this.lesson_many.findIndex(lesson => lesson.id === lesson_id);
        this.lesson_many[found_lesson_index].title = new_lesson_title;
    }

    getLessons() {
        return this.lesson_many
    }
}