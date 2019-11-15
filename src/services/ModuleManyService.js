export default class ModuleManyService {
  constructor(module_many) {
    this.id = 0;
    this.module_many = module_many;
  }

  createModule(courseId, module) {
    return fetch(`http://localhost:8080/api/courses/${courseId}/modules`, {
      method: "POST",
      body: JSON.stringify(module),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true
      }
    }).then(response => response.json());
  }

  findModules(courseId) {
    return fetch(`http://localhost:8080/api/courses/${courseId}/modules`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true
      }
    }).then(response => response.json());
  }

  deleteModule(moduleId) {
    return fetch(`http://localhost:8080/api/modules/${moduleId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true
      }
    }).then(response => response.json());
  }

  updateModule(moduleId, module) {
    return fetch(`http://localhost:8080/api/modules/${moduleId}`, {
      method: "PUT",
      body: JSON.stringify(module),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true
      }
    }).then(response => response.json());
  }

  findOneModule(moduleId) {
    return fetch(`http://localhost:8080/api/modules/${moduleId}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": true
        }
      }).then(response => response.json());
    }
}
