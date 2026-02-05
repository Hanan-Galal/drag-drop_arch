import { ProjectRules } from "./ProjectRules.js";
import { projectStatus } from "../utils/project-status.js";
class ProjectState {
    constructor() {
        this._projects = [];
        this._listeners = [];
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ProjectState();
        }
        return this._instance;
    }
    createProject(title, description) {
        const newProject = new ProjectRules(Math.random().toString(), title, description, projectStatus.intial);
        this._projects.push(newProject);
        this._runListeners();
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