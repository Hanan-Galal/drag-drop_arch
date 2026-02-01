export class projects {
    _status;
    _template;
    _projectsContainer;
    _hostElement;
    constructor(_status) {
        this._status = _status;
        this._template = document.getElementById('list');
        this._hostElement = document.getElementById('app');
        const templateContent = document.importNode(this._template.content, true);
        this._projectsContainer = templateContent.firstElementChild;
        this.renderProjects();
        this._hostElement.insertAdjacentElement('beforeend', this._projectsContainer);
    }
    renderProjects() {
        const title = this._projectsContainer.querySelector('.title');
        title.textContent = this._status;
        const list = this._projectsContainer.querySelector('ul');
        list.classList.add(this._status + '-projects');
    }
}
//# sourceMappingURL=projectList.js.map