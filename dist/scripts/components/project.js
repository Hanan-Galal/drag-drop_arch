var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { base } from "./Base.js";
import { ProjectRules } from "../store/ProjectRules.js";
import { projectState } from "../store/ProjectState.js";
import { autoBind } from "./autoBind.js";
export class Project extends base {
    constructor(projectListId, project) {
        super('project-item', projectListId, false, project.id);
        this._project = project;
        this._renderProject();
        this._deleteProject();
        this._runDragging();
    }
    _renderProject() {
        const title = this._element.querySelector('.project_title');
        const desc = this._element.querySelector('.project_desc');
        title.textContent = this._project.title;
        desc.textContent = this._project.description;
    }
    _deleteProject() {
        const deleteBtn = this._element.querySelector('.delete');
        deleteBtn.addEventListener('click', this._deleteHandler);
    }
    _deleteHandler() {
        if (confirm('Are you sure you want to delete this project?')) {
            projectState.deleteProjects(this._project.id);
        }
    }
    _runDragging() {
        this._element.addEventListener('dragstart', this._handleDragStart);
        this._element.addEventListener('dragend', this._handleDragEnd);
    }
    _handleDragStart(event) {
        this._element.style.opacity = '0.5';
        event.dataTransfer.setData('text/plain', this._project.id);
        event.dataTransfer.effectAllowed = 'move';
    }
    _handleDragEnd(event) {
        this._element.style.opacity = '1';
    }
}
__decorate([
    autoBind
], Project.prototype, "_deleteHandler", null);
__decorate([
    autoBind
], Project.prototype, "_handleDragStart", null);
__decorate([
    autoBind
], Project.prototype, "_handleDragEnd", null);
//# sourceMappingURL=project.js.map