//Create a form for inputing daily journal entries
//target the display--container from index.html
const displayContainer = document.querySelector("#display--container");
displayContainer.appendChild(buildElement("form", "entry--form"));
const formContainer = document.querySelector("#entry--form");

//concept covered
formContainer.appendChild(buildFieldset("concept--fieldset", "input", "concept--input", "text", "Concept covered: "))

//journal entry
formContainer.appendChild(buildFieldset("entry--fieldset", "input", "journalEntry--input", "textarea", "Journal Entry: "))

//date of entry
formContainer.appendChild(buildFieldset("date--fieldset", "input", "date--input", "date", "Date Covered: "))

// //I was having too many issues trying to get this down to a single line that
formContainer.appendChild(buildFieldset("mood--fieldset", "select", "mood--select", undefined, "Mood: "))
moodSelection();

// formContainer.appendChild(buildFieldset(""))

//submit button
formContainer.appendChild(buildElement("button", "submit--button", "Submit Entry"));
//create a variable that targets the submit button
let submitButton = document.querySelector("#submit--button")
submitButton.addEventListener("click", handleSave)

//Create a section for the entries to be displayed beneath the form
displayContainer.appendChild(buildElement("section", "entry--log"));

//clear the element from the dom
let clearElement = domElement => {
        while (domElement.firstChild) {
            domElement.removeChild(domElement.firstChild);
        }
    }