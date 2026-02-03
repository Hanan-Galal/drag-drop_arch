import { base } from "./Base.js";
export class projects extends base {
    constructor(_status) {
        super('list', 'app', true, `${_status}-projects`);
        this._status = _status;
        this.renderProjects();
    }
    renderProjects() {
        const title = this._element.querySelector('.title');
        title.textContent = this._status;
        const list = this._element.querySelector('ul');
        list.classList.add(this._status + '-projects');
    }
}
//# sourceMappingURL=projectList.js.map