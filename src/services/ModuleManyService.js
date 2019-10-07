export default class ModuleManyService {
    constructor(module_many){
        this.id = 0
        this.module_many = module_many
    }

    createModule(module_title){
        if (module_title == ''){
            module_title = 'Default Module'
        }
        let module = {
            title: module_title,
            lessons: [],
            id: this.id
        }
        this.module_many.push(module)
        this.id += 1
    }

    deleteModule(module_title) {
        this.module_many =  this.module_many.filter(module => module.title !== module_title);
    }

    updateModule(org_module_title, new_module_title) {
        let found_module_index = this.module_many.indIndex(module => module.title == org_module_title);
        this.module_many[found_module_index].title = new_module_title;
    }

    getModules() {
        return this.module_many
    }
}