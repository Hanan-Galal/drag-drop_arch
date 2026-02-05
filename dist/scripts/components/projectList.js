import { ProjectRules } from "../store/ProjectRules.js";
import { projectState } from "../store/ProjectState.js";
import { base } from "./Base.js";
export class projects extends base {
    constructor(_status) {
        super('list', 'app', false, `${_status}-projects`);
        this._status = _status;
        this.renderProjectsList();
        projectState.pushListener((projects) => {
            this.renderProjects(projects);
        });
    }
    renderProjectsList() {
        const title = this._element.querySelector('.title');
        title.textContent = this._status;
        const list = this._element.querySelector('ul');
        list.classList.add(this._status + '-projects');
    }
    renderProjects(projects) {
        const projectList = this._element.querySelector(`.${this._status}-projects`);
        projectList.innerHTML = '';
        for (const project of projects) {
            const content = this._createProjectItem(project);
            projectList.innerHTML += content;
        }
    }
    _createProjectItem(project) {
        const content = `
    <div class='project'draggable="true" >
    <h2 class="project_title" id="project_title">${project.title}</h2>
    <p class="project_desc" id="project_desc">${project.description}</p>
    </div>`;
        return content;
    }
}
//# sourceMappingURL=projectList.js.map