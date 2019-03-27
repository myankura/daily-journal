console.log("domManager.js");
//target the display--container from index.html
const displayContainer = document.querySelector("#display--container");

//create function to build basic elements
const buildElement = (elementType, elementId, elementTextContent) => {
    let htmlElement = document.createElement(elementType);
    if (elementId) {
        htmlElement.setAttribute("id", elementId);
    }
    htmlElement.textContent = elementTextContent;
    return htmlElement;
};

const buildOption = (optionValue, optionText) => {
    let optionElement = document.querySelector("#mood--select");
    optionElement = document.createElement("option");
    optionElement.setAttribute("name", optionValue);
    optionElement.textContent = optionText;
    return optionElement;
}
//Create a form for inputing daily journal entries
displayContainer.appendChild(buildElement("section", "entry--form"));
const formContainer = document.querySelector("#entry--form");
//concept covered
formContainer.appendChild(buildElement("label", "concept--label", "Concept covered: "));
formContainer.appendChild(buildElement("input", "concept--input"));
//journal entry
formContainer.appendChild(buildElement("label", "journalEntry--label", "Journal Entry: "));
formContainer.appendChild(buildElement("input", "journalEntry--input"));
//date of journal entry
formContainer.appendChild(buildElement("label", "date--label", "Date covered: "));
formContainer.appendChild(buildElement("input", "date--input"));
//mood of the day
formContainer.appendChild(buildElement("label", "mood--label", "Mood: "));
formContainer.appendChild(buildElement("select", "mood--select"));
formContainer.appendChild(buildOption("happy", "Happy!"));
//submit button
formContainer.appendChild(buildElement("button", "submit--button", "Submit Entry"));

//Create a section for the entries to be displayed beneath the form
displayContainer.appendChild(buildElement("section", "entry--log"));

//clear the element from the dom
let clearElement = domElement => {
        while (domElement.firstChild) {
            domElement.removeChild(domElement.firstChild);
        }
    }