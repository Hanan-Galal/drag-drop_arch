import { base } from "./Base.js";
import { ProjectRules } from "../store/ProjectRules.js";
import { projectState } from "../store/ProjectState.js";
import { autoBind } from "./autoBind.js";
export class Project extends base<HTMLDivElement> {
    private _project: ProjectRules;
    constructor(projectListId: string,project: ProjectRules) {
        super('project-item', projectListId ,false , project.id);
        this._project = project;
        this._renderProject();
        this._deleteProject();
        this._runDragging();
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
     private _deleteProject(): void {
        const deleteBtn = this._element.querySelector('.delete')! as HTMLButtonElement;
        deleteBtn.addEventListener('click', this._deleteHandler);
         
    }
 @autoBind
private _deleteHandler() {
    if (confirm('Are you sure you want to delete this project?')) {
        projectState.deleteProjects(this._project.id);
    }

}
private _runDragging():void{
    this._element.addEventListener('dragstart',this._handleDragStart);
    this._element.addEventListener('dragend',this._handleDragEnd);
}
/**
 * 
 * @param e Drag event
 * @desc when start drag set data in datatransfer text/plain project id
 */
 @autoBind
 private _handleDragStart(event: DragEvent): void {
    this._element.style.opacity = '0.5';
    event.dataTransfer!.setData('text/plain', this._project.id);
    event.dataTransfer!.effectAllowed = 'move';
}
 @autoBind
 private _handleDragEnd(event: DragEvent): void {
    // Handle drag end logic if needed
    this._element.style.opacity = '1';

}       
}