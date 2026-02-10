import { base } from "./Base.js";
import { ProjectRules } from "../store/ProjectRules.js";
export class Project extends base<HTMLDivElement> {
    private _project: ProjectRules;
    constructor(projectListId: string,project: ProjectRules) {
        super('project-item', projectListId ,false , project.id);
        this._project = project;
        this._renderProject();
    }
    /**
     * Renders the project details (title and description) in the DOM element.
     */
    private _renderProject(): void {
        const title = this._element.querySelector('.project_title')! as HTMLHeadingElement;
        const desc = this._element.querySelector('.project_desc')! as HTMLParagraphElement;
        title.textContent = this._project.title;
        desc.textContent = this._project.description;

    }
}
