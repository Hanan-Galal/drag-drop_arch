export var projectStatus;
(function (projectStatus) {
    projectStatus[projectStatus["initial"] = 0] = "initial";
    projectStatus[projectStatus["active"] = 1] = "active";
    projectStatus[projectStatus["finished"] = 2] = "finished";
})(projectStatus || (projectStatus = {}));
//# sourceMappingURL=project-status.js.map