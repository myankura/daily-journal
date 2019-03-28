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
formContainer.appendChild(buildElement("textArea", "journalEntry--input"));
//let textAreaInput = formContainer.appendChild(buildElement("textArea", "journalEntry--input"));
//sizes the textArea element. It was a nice idea but it didn't pan out because of flexbox.
// textAreaInput.rows = "10";
// textAreaInput.cols = "5";
//date of journal entry
formContainer.appendChild(buildElement("label", "date--label", "Date covered: "));
let dateInput = formContainer.appendChild(buildElement("input", "date--input"));
dateInput.setAttribute("type", "date");
//mood of the day
formContainer.appendChild(buildElement("label", "mood--label", "Mood: "));
let selectElement = formContainer.appendChild(buildElement("select", "mood--select"));
selectElement.appendChild(buildOption("happy", "Happy!"));
selectElement.appendChild(buildOption("ok", "Ok"));
selectElement.appendChild(buildOption("sad", "Sad"));
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