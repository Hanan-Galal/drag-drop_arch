import { ProjectRules } from "./ProjectRules.js";
import { projectStatus } from "../utils/project-status.js";
class ProjectState {
    constructor() {
        this._projects = [];
        this._listeners = [];
        this._localStorageProjects = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];
        this._projects = this._localStorageProjects;
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ProjectState();
        }
        return this._instance;
    }
    createProject(title, description) {
        const newProject = new ProjectRules(Math.random().toString(), title, description, projectStatus.Inital);
        this._projects.push(newProject);
        this._runListeners();
    }
    changeProjectStatus(projectId, newStatus) {
        const project = this._projects.find(proj => proj.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this._runListeners();
            localStorage.setItem('projects', JSON.stringify(this._projects));
        }
    }
    deleteProjects(id) {
        const projectsAfterDelete = this._projects.filter(project => project.id !== id);
        this._projects = projectsAfterDelete;
        this._runListeners();
        localStorage.setItem('projects', JSON.stringify(this._projects));
    }
    _runListeners() {
        for (const listener of this._listeners) {
            listener([...this._projects]);
        }
    }
    pushListener(listener) {
        this._listeners.push(listener);
    }
}
export const projectState = ProjectState.getInstance();
//# sourceMappingURL=ProjectState.js.map