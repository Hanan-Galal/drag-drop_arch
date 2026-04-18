var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ProjectRules } from "../store/ProjectRules.js";
import { projectState } from "../store/ProjectState.js";
import { projectStatus } from "../utils/project-status.js";
import { Project } from "./project.js";
import { base } from "./Base.js";
import { autoBind } from "./autoBind.js";
export class projects extends base {
    constructor(_status) {
        super('list', 'app', false, `${_status}-projects`);
        this._status = _status;
        this.renderProjectsList();
        if (JSON.parse(localStorage.getItem('projects'))) {
            const storedProjects = JSON.parse(localStorage.getItem('projects'));
            this._showProjectInDom(storedProjects);
        }
        ;
        projectState.pushListener((projects) => {
            this._showProjectInDom(projects);
            this._runDragging();
        });
    }
    renderProjectsList() {
        const title = this._element.querySelector('.title');
        title.textContent = this._status;
        const list = this._element.querySelector('ul');
        list.id = `${this._status}-list`;
        title.textContent = `${this._status} Projects`;
    }
    _showProjectInDom(projects) {
        const filteredStoredProjects = this._filterProjectsStatus(projects);
        this.renderProjects(filteredStoredProjects);
    }
    ;
    renderProjects(projects) {
        const projectList = document.getElementById(`${this._status}-list`);
        projectList.innerHTML = '';
        for (const project of projects) {
            new Project(`${this._status}-list`, project);
        }
    }
    _filterProjectsStatus(projects) {
        const filteredProjects = projects.filter((project) => {
            if (this._status === 'Inital') {
                return project.status === projectStatus.Inital;
            }
            else if (this._status === 'Active') {
                return project.status === projectStatus.Active;
            }
            else if (this._status === 'Finished') {
                return project.status === projectStatus.Finished;
            }
            else {
                return true;
            }
        });
        return filteredProjects;
    }
    _runDragging() {
        this._element.addEventListener('dragover', this._handleDragOver);
        this._element.addEventListener('drop', this._handleDrop);
    }
    _handleDragOver(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            this._element.classList.add('drag-over');
        }
    }
    _handleDrop(event) {
        const projectId = event.dataTransfer.getData('text/plain');
        const newStatus = this._element.id === 'Inital-projects'
            ? projectStatus.Inital
            : this._element.id === 'Active-projects'
                ? projectStatus.Active
                : projectStatus.Finished;
        projectState.changeProjectStatus(projectId, newStatus);
    }
}
__decorate([
    autoBind
], projects.prototype, "_handleDragOver", null);
__decorate([
    autoBind
], projects.prototype, "_handleDrop", null);
//# sourceMappingURL=projectList.js.map