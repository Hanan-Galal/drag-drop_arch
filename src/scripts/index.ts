import { Fields } from "./components/fields.js";
import { Popup } from "./components/Popup.js";
import { projects } from "./components/projectList.js";

new Fields();
new projects("initial");
new projects("active");
new projects("finished");
new Popup();
