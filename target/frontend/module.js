const div = document.createElement('div');
div.innerHTML = '<custom-style><style include="lumo-color lumo-typography"></style></custom-style>';
document.head.insertBefore(div.firstElementChild, document.head.firstChild);

function addCssBlock(block) {
  const tpl = document.createElement('template');
  tpl.innerHTML = block;
  document.head.appendChild(tpl.content);
}
import $css_0 from 'Frontend/styles/shared-styles.css';
addCssBlock(`<custom-style><style>${$css_0}</style></custom-style>`);
// import $css_1 from 'Frontend/styles/vaadin-text-field-styles.css';
// addCssBlock(`<dom-module id="flow_css_mod_1" theme-for="vaadin-text-field"><template><style>${$css_1}</style></template></dom-module>`);

// import '@polymer/iron-icon/iron-icon.js';
// import '@polymer/iron-list/iron-list.js';
import '@vaadin/flow-frontend/comboBoxConnector.js';
import '@vaadin/flow-frontend/contextMenuConnector.js';
import '@vaadin/flow-frontend/datepickerConnector.js';
import '@vaadin/flow-frontend/dndConnector-es6.js';
import '@vaadin/flow-frontend/flow-component-renderer.js';
import '@vaadin/flow-frontend/gridConnector.js';
import '@vaadin/flow-frontend/gridProConnector.js';
import '@vaadin/flow-frontend/ironListConnector.js';
import '@vaadin/flow-frontend/ironListStyles.js';
import '@vaadin/flow-frontend/menubarConnector.js';
import '@vaadin/flow-frontend/selectConnector.js';
import '@vaadin/flow-frontend/timepickerConnector.js';
import '@vaadin/flow-frontend/vaadin-big-decimal-field.js';
import '@vaadin/flow-frontend/vaadin-grid-flow-selection-column.js';
import VaadinAccordion from "core/vaadin-accordion";
import VaadinAppLayout from "core/vaadin-app-layout";
import VaadinDrawerToggle from "core/vaadin-drawer-toggle";
import VaadinButton from "core/vaadin-button";
import VaadinCheckboxGroup from "core/vaadin-checkbox-group";
import VaadinCheckbox from "core/vaadin-checkbox";
import VaadinComboBox from "core/vaadin-combo-box";
import VaadinContextMenu from "core/vaadin-context-menu";
import VaadinCustomFiels from "core/vaadin-custom-field";
import VaadinDatePicker from "core/vaadin-date-picker";
import VaadinDateTimePicker from "core/vaadin-date-time-picker";
import VaadinDetails from "core/vaadin-details";
import VaadinDialog from "core/vaadin-dialog";
import VaadinFormItem from "core/vaadin-form-item";
import VaadinFormLayout from "core/vaadin-form-layout";
import VaadinGrid from "core/vaadin-grid";
import VaadinIcons from "core/vaadin-icons";
import VaadinListBox from "core/vaadin-list-box";
import VaadinLoginForm from "core/vaadin-login-form";
import VaadinLoginOverlay from "core/vaadin-login-overlay";
import VaadinMenuBar from "core/vaadin-menu-bar";
import VaadinNotification from "core/vaadin-notification";
import VaadinHorizontalLayout from "core/vaadin-horizontal-layout";
import VaadinVerticalLayout from "core/vaadin-vertical-layout";
import VaadinScroller from "core/vaadin-scroller";
import VaadinProgressBar from "core/vaadin-progress-bar";
import VaadinRadioButton from "core/vaadin-radio-button";
import VaadinRadioGroup from "core/vaadin-radio-group";
import VaadinSelect from "core/vaadin-select";
import VaadinSplitLayout from "core/vaadin-split-layout";
import VaadinTab from "core/vaadin-tab";
import VaadinTabs from "core/vaadin-tabs";
import VaadinEmailField from "core/vaadin-email-field";
import VaadinIntegerField from "core/vaadin-integer-field";
import VaadinNumberField from "core/vaadin-number-field";
import VaadinPasswordField from "core/vaadin-password-field";
import VaadinTextArea from "core/vaadin-text-area";
import VaadinTextField from "core/vaadin-text-field";
import VaadinTimePicker from "core/vaadin-time-picker";
import VaadinUploadFile from "core/vaadin-upload-file";
import VaadinUpload from "core/vaadin-upload";

