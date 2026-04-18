 import { ProjectRules } from "./ProjectRules.js";
 import { projectStatus } from "../utils/project-status.js";
import type { ListenerType } from "./listenerType.js";
 class ProjectState{
     private static _instance: ProjectState;
     private _projects: ProjectRules[] = [];
        private _listeners: ListenerType[] = [];
        private _localStorageProjects :ProjectRules[]=localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')!) : [];
        private constructor() {
            // Load projects from local storage if available
            this._projects = this._localStorageProjects;
        }
        /**
         * @ desc This method is used to get the instance of the ProjectState class. It checks if an instance already exists, and if not, it creates a new one. This ensures that there is only one instance of the ProjectState class throughout the application.
         * @returns  The instance of the ProjectState class.
         */
            public static getInstance() {
                if (!this._instance) {
                    this._instance = new ProjectState();
                }
                return this._instance;
            }


            public createProject(title: string, description: string ): void {
                const newProject = new ProjectRules(Math.random().toString(), title, description, projectStatus.Inital);
                this._projects.push(newProject);
                this._runListeners(); 
            }
  public  changeProjectStatus(projectId: string, newStatus: projectStatus): void {
    const project = this._projects.find(proj => proj.id === projectId);
    if (project && project.status !== newStatus) {
        project.status = newStatus;
        this._runListeners();
    localStorage.setItem('projects', JSON.stringify(this._projects));
    }       
    
}
/**
 * delete project from the project list and update the local storage and run the listeners to update the UI
 * 
 * @param ProjectID :string;
 */
public deleteProjects(id: string): void {
    const projectsAfterDelete = this._projects.filter(project => project.id !== id);
    this._projects = projectsAfterDelete;
    this._runListeners();
    localStorage.setItem('projects', JSON.stringify(this._projects));
}
private _runListeners(): void {
    for (const listener of this._listeners) {
        listener([...this._projects]);
    }}

public pushListener(listener: ListenerType) {
    this._listeners.push(listener);
}
 }
   export const projectState = ProjectState.getInstance();