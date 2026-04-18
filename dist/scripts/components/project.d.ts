import { base } from "./Base.js";
import { ProjectRules } from "../store/ProjectRules.js";
export declare class Project extends base<HTMLDivElement> {
    private _project;
    constructor(projectListId: string, project: ProjectRules);
    private _renderProject;
    private _deleteProject;
    private _deleteHandler;
    private _runDragging;
    private _handleDragStart;
    private _handleDragEnd;
}
//# sourceMappingURL=project.d.ts.map