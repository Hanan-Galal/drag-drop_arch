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
            console.log('Title:', titleValue);
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
        if (titleErrorMessage.length > 0) {
            alert(titleErrorMessage);
            return false;
        }
        if (descErrorMessage.length > 0) {
            alert(descErrorMessage);
            return false;
        }
        return true;
    }
}
//# sourceMappingURL=fields.js.map