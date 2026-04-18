import { ProjectRules } from "../store/ProjectRules.js";
import { projectState } from "../store/ProjectState.js";
import { projectStatus } from "../utils/project-status.js";
import { Project } from "./project.js"; 
import { base } from "./Base.js";
import { autoBind } from "./autoBind.js";

export class projects extends base<HTMLDivElement> {
    
    constructor(private _status: 'Inital' | 'Active' | 'Finished') {
    
      super('list', 'app', false, `${_status}-projects`);
      this.renderProjectsList();
        if(JSON.parse(localStorage.getItem('projects')!)){
            const storedProjects: ProjectRules[] = JSON.parse(localStorage.getItem('projects')!);
            this._showProjectInDom(storedProjects);
      };
      projectState.pushListener((projects: ProjectRules[]) => {
        this._showProjectInDom(projects);
       this._runDragging();
    
     });
    }
      private renderProjectsList(): void {
        const title=this._element.querySelector('.title')! as HTMLHeadingElement;
        title.textContent = this._status;
        const list=this._element.querySelector('ul')! as HTMLUListElement;
        
        list.id = `${this._status}-list`;
        title.textContent = `${this._status} Projects`;
} 
private _showProjectInDom(projects: ProjectRules[]): void {
     const filteredStoredProjects = this._filterProjectsStatus(projects);
            this.renderProjects(filteredStoredProjects);
      };

private renderProjects(projects: ProjectRules[]): void {
    const projectList=document.getElementById(`${this._status}-list`)! as HTMLUListElement;
    projectList.innerHTML = '';
    for (const project of projects) {
        new Project(`${this._status}-list`,project);

    }
}

    private _filterProjectsStatus(projects: ProjectRules[]): ProjectRules[] {
        const filteredProjects = projects.filter((project:ProjectRules) => {
    if (this._status === 'Inital') {
        return project.status === projectStatus.Inital;
    } else if (this._status === 'Active') {
        return project.status === projectStatus.Active;
    } else if (this._status === 'Finished') {
        return project.status === projectStatus.Finished;
    } else {
        return true;
        
    }});
    return filteredProjects;
    }
    
    private _runDragging():void{
        this._element.addEventListener('dragover',this._handleDragOver);
        this._element.addEventListener('drop',this._handleDrop);
    }
    @autoBind
    private _handleDragOver(event: DragEvent): void {
       
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault(); 
        this._element.classList.add('drag-over');
        
    }
    }
    @autoBind
    private _handleDrop(event: DragEvent): void {
        const projectId = event.dataTransfer!.getData('text/plain');
const newStatus =
    this._element.id === 'Inital-projects'
        ? projectStatus.Inital
        : this._element.id === 'Active-projects'
            ? projectStatus.Active
            : projectStatus.Finished;    
        projectState.changeProjectStatus(projectId, newStatus);      

    }

}