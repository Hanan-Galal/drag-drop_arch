declare class ProjectState {
    private static _instance;
    private _projects;
    private _listeners;
    private constructor();
    static getInstance(): ProjectState;
    createProject(title: string, description: string): void;
    private _runListeners;
    pushListener(listener: Function): void;
}
export declare const projectState: ProjectState;
export {};
//# sourceMappingURL=ProjectState.d.ts.map