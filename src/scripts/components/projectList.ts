import { ProjectRules } from "../store/ProjectRules.js";
import { projectState } from "../store/ProjectState.js";
import { base } from "./Base.js";

export class projects extends base<HTMLDivElement> {
    
    constructor(private _status: 'initial' | 'active' | 'finished') {
    
      super('list', 'app', false, `${_status}-projects`);
      this.renderProjectsList();
      projectState.pushListener((projects: ProjectRules[]) => {
        this.renderProjects(projects);
      });

    }
    private renderProjectsList(): void {
        const title=this._element.querySelector('.title')! as HTMLHeadingElement;
        title.textContent = this._status;
        const list=this._element.querySelector('ul')! as HTMLUListElement;
        list.classList.add(this._status + '-projects');
} 
private renderProjects(projects: ProjectRules[]): void {
    const projectList=this._element.querySelector(`.${this._status}-projects`)! as HTMLUListElement;
    projectList.innerHTML = '';
    for (const project of projects) {
        const content = this._createProjectItem(project);
        projectList.innerHTML += content;

    }
}
private _createProjectItem(project: ProjectRules): string {
    const content=  `
    <div class='project'draggable="true" >
    <h2 class="project_title" id="project_title">${project.title}</h2>
    <p class="project_desc" id="project_desc">${project.description}</p>
    </div>`;
    return content;
}

}