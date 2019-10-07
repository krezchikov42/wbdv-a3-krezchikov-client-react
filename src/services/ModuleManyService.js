export default class ModuleManyService {
    constructor(module_many){
        this.module_many = module_many
    }

    addModule(module_title){
        let module = {
            module_title: module_title,
            lessons: []
        }
        this.module_many.push(module)
    }

    deleteModule(module_title) {
        this.module_many =  this.module_many.filter(module => module.title !== module_title);
    }

    updateModule(org_module_title, new_module_title) {
        let found_module_index = this.module_many.indIndex(module => module.title == org_module_title);
        this.module_many[found_module_index].title = new_module_title;
    }
}