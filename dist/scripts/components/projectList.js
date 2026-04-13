import { ProjectRules } from "../store/ProjectRules.js";
import { projectState } from "../store/ProjectState.js";
import { projectStatus } from "../utils/project-status.js";
import { Project } from "./project.js";
import { base } from "./Base.js";
export class projects extends base {
    constructor(_status) {
        super('list', 'app', false, `${_status}-projects`);
        this._status = _status;
        this.renderProjectsList();
        if (JSON.parse(localStorage.getItem('projects'))) {
            const storedProjects = JSON.parse(localStorage.getItem('projects'));
            const filteredStoredProjects = this._filterProjectsStatus(storedProjects);
            this.renderProjects(filteredStoredProjects);
        }
        ;
        projectState.pushListener((projects) => {
            const filteredProjects = this._filterProjectsStatus(projects);
            this.renderProjects(filteredProjects);
        });
    }
    renderProjectsList() {
        const title = this._element.querySelector('.title');
        title.textContent = this._status;
        const list = this._element.querySelector('ul');
        list.id = `${this._status}-list`;
        title.textContent = `${this._status} Projects`;
    }
    renderProjects(projects) {
        const projectList = document.getElementById(`${this._status}-list`);
        projectList.innerHTML = '';
        for (const project of projects) {
            new Project(`${this._status}-list`, project);
        }
    }
    _filterProjectsStatus(projects) {
        const filteredProjects = projects.filter((project) => {
            if (this._status === 'initial') {
                return project.status === projectStatus.initial;
            }
            else if (this._status === 'active') {
                return project.status === projectStatus.active;
            }
            else if (this._status === 'finished') {
                return project.status === projectStatus.finished;
            }
            else {
                return true;
            }
        });
        return filteredProjects;
    }
}
//# sourceMappingURL=projectList.js.map