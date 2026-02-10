import { base } from "./Base.js";
import { ProjectRules } from "../store/ProjectRules.js";
export class Project extends base {
    constructor(projectListId, project) {
        super('project-item', projectListId, false, project.id);
        this._project = project;
        this._renderProject();
    }
    _renderProject() {
        const title = this._element.querySelector('.project_title');
        const desc = this._element.querySelector('.project_desc');
        title.textContent = this._project.title;
        desc.textContent = this._project.description;
    }
}
//# sourceMappingURL=project.js.map