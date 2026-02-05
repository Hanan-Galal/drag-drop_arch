 import { ProjectRules } from "./ProjectRules.js";
 import { projectStatus } from "../utils/project-status.js";
 class ProjectState{
     private static _instance: ProjectState;
     private _projects: ProjectRules[] = [];
        private _listeners: Function[] = [];
        private constructor() {
       
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
                const newProject = new ProjectRules(Math.random().toString(), title, description, projectStatus.intial);
                this._projects.push(newProject);
                this._runListeners();
}
private _runListeners(): void {
    for (const listener of this._listeners) {
        listener([...this._projects]);
    }}

public pushListener(listener: Function) {
    this._listeners.push(listener);
}
 }
   export const projectState = ProjectState.getInstance();