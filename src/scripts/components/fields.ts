import { assignValidationInputs, handleValidationErrors } from "../utils/validation/validation_helpers.js";
import { base } from "./Base.js";

export class Fields extends base<HTMLDivElement> {
    constructor() {
        super('fields', 'app', true, 'form');
        this._addProject();
    }

    private _addProject(): void {
        this._element.addEventListener('submit', this._handleAddProject.bind(this));
    }

    private _handleAddProject(event: Event) {
        event.preventDefault();
        const [titleInput, descInput] = this._targetElementInputs();
        const [titleValue, descValue] = this._getInputValues(titleInput, descInput);

        if (this._validateInputValues(titleValue, descValue)) {
            console.log('Title:', titleValue);
        }
    }

    private _targetElementInputs(): [HTMLInputElement, HTMLInputElement] {
        const titleInput = document.getElementById('title')! as HTMLInputElement;
        const descInput = document.getElementById('desc')! as HTMLInputElement;
        return [titleInput, descInput];
    }

    private _getInputValues(titleInput: HTMLInputElement, descInput: HTMLInputElement): [string, string] {
        return [titleInput.value, descInput.value];
    }

    private _validateInputValues(titleValue: string, descValue: string): boolean {
        const [titleInputRule, descInputRule] = assignValidationInputs(titleValue, descValue);
        const titleErrorMessage = handleValidationErrors(titleInputRule);
        const descErrorMessage = handleValidationErrors(descInputRule);

        if (titleErrorMessage.length > 0) {
        window.alert(titleErrorMessage);
            
        }

        if (descErrorMessage.length > 0) {
            window.alert(descErrorMessage);
        }

        return true;
    }
}