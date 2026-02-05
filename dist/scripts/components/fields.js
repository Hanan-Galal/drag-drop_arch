import { projectState } from "../store/ProjectState.js";
import { assignValidationInputs, handleValidationErrors } from "../utils/validation/validation_helpers.js";
import { base } from "./Base.js";
export class Fields extends base {
    constructor() {
        super('fields', 'app', true, 'form');
        this._addProject();
    }
    _addProject() {
        this._element.addEventListener('submit', this._handleAddProject.bind(this));
    }
    _handleAddProject(event) {
        event.preventDefault();
        const [titleInput, descInput] = this._targetElementInputs();
        const [titleValue, descValue] = this._getInputValues(titleInput, descInput);
        if (this._validateInputValues(titleValue, descValue)) {
            projectState.createProject(titleValue, descValue);
        }
    }
    _targetElementInputs() {
        const titleInput = document.getElementById('title');
        const descInput = document.getElementById('desc');
        return [titleInput, descInput];
    }
    _getInputValues(titleInput, descInput) {
        return [titleInput.value, descInput.value];
    }
    _validateInputValues(titleValue, descValue) {
        const [titleInputRule, descInputRule] = assignValidationInputs(titleValue, descValue);
        const titleErrorMessage = handleValidationErrors(titleInputRule);
        const descErrorMessage = handleValidationErrors(descInputRule);
        const popup_container = document.getElementById('popup_container');
        const descPopup = document.getElementById('popup_desc');
        if (titleErrorMessage.length > 0) {
            popup_container.classList.add('visible_popup');
            descPopup.textContent = titleErrorMessage;
            return false;
        }
        else if (descErrorMessage.length > 0) {
            popup_container.classList.add('visible_popup');
            descPopup.textContent = descErrorMessage;
            return false;
        }
        return true;
    }
}
//# sourceMappingURL=fields.js.map