import { projectStatus } from "../utils/project-status.js";
import type { ListenerType } from "./listenerType.js";
declare class ProjectState {
    private static _instance;
    private _projects;
    private _listeners;
    private _localStorageProjects;
    private constructor();
    static getInstance(): ProjectState;
    createProject(title: string, description: string): void;
    changeProjectStatus(projectId: string, newStatus: projectStatus): void;
    deleteProjects(id: string): void;
    private _runListeners;
    pushListener(listener: ListenerType): void;
}
export declare const projectState: ProjectState;
export {};
//# sourceMappingURL=ProjectState.d.ts.map