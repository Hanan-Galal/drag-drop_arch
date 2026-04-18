import { base } from "./Base.js";
export declare class projects extends base<HTMLDivElement> {
    private _status;
    constructor(_status: 'Inital' | 'Active' | 'Finished');
    private renderProjectsList;
    private _showProjectInDom;
    private renderProjects;
    private _filterProjectsStatus;
    private _runDragging;
    private _handleDragOver;
    private _handleDrop;
}
//# sourceMappingURL=projectList.d.ts.map