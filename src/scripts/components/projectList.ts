import { ProjectRules } from "../store/ProjectRules.js";
import { projectState } from "../store/ProjectState.js";
import { projectStatus } from "../utils/project-status.js";
import { Project } from "./project.js"; 
import { base } from "./Base.js";

export class projects extends base<HTMLDivElement> {
    
    constructor(private _status: 'initial' | 'active' | 'finished') {
    
      super('list', 'app', false, `${_status}-projects`);
      this.renderProjectsList();
        if(JSON.parse(localStorage.getItem('projects')!)){
            const storedProjects: ProjectRules[] = JSON.parse(localStorage.getItem('projects')!);
            const filteredStoredProjects = this._filterProjectsStatus(storedProjects);
            this.renderProjects(filteredStoredProjects);
      };
      projectState.pushListener((projects: ProjectRules[]) => {
            const filteredProjects = this._filterProjectsStatus(projects);
        this.renderProjects(filteredProjects);
    
     });
    }
      private renderProjectsList(): void {
        const title=this._element.querySelector('.title')! as HTMLHeadingElement;
        title.textContent = this._status;
        const list=this._element.querySelector('ul')! as HTMLUListElement;
        
        list.id = `${this._status}-list`;
        title.textContent = `${this._status} Projects`;
} 

private renderProjects(projects: ProjectRules[]): void {
    const projectList=document.getElementById(`${this._status}-list`)! as HTMLUListElement;
    projectList.innerHTML = '';
    for (const project of projects) {
        new Project(`${this._status}-list`,project);

    }
}

    private _filterProjectsStatus(projects: ProjectRules[]): ProjectRules[] {
        const filteredProjects = projects.filter((project:ProjectRules) => {
    if (this._status === 'initial') {
        return project.status === projectStatus.initial;
    } else if (this._status === 'active') {
        return project.status === projectStatus.active;
    } else if (this._status === 'finished') {
        return project.status === projectStatus.finished;
    } else {
        return true;
        
    }});
    return filteredProjects;
    }
}