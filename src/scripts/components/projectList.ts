import { base } from "./Base.js";

export class projects extends base<HTMLDivElement> {
    
    constructor(private _status: 'initial' | 'active' | 'finished') {
    
      super('list', 'app', false, `${_status}-projects`);
      this.renderProjects();
    }
    private renderProjects(): void {
        const title=this._element.querySelector('.title')! as HTMLHeadingElement;
        title.textContent = this._status;
        const list=this._element.querySelector('ul')! as HTMLUListElement;
        list.classList.add(this._status + '-projects');
} 

}