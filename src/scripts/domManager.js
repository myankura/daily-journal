console.log("domManager.js");

//create function to build basic elements
const buildElement = (elementType, elementId, elementTextContent) => {
    let htmlElement = document.createElement(elementType);
    if (elementId) {
        htmlElement.setAttribute("id", elementId);
    }
    htmlElement.textContent = elementTextContent;
    return htmlElement;
};

//build an option
const buildOption = (optionValue, optionText) => {
    let optionElement = document.querySelector("#mood--select");
    optionElement = document.createElement("option");
    optionElement.setAttribute("name", optionValue);
    optionElement.textContent = optionText;
    return optionElement;
}
//needs legend, id, inputType
const buildFieldset = (elementId, elementType, inputId, inputType, legendText) => {
    const formFieldset = buildElement("fieldset");
    formFieldset.appendChild(buildElement("legend", elementId, legendText));
    const inputElement = buildElement(elementType);
    inputElement.setAttribute("type", inputType);
    inputElement.setAttribute("id", inputId);
    formFieldset.appendChild(inputElement);
    return formFieldset;
}
const moodSelection = () => {
    let moodInput = document.querySelector("#mood--select")
    moodInput.appendChild(buildOption("happy", "Happy"));
    moodInput.appendChild(buildOption("ok", "Ok"));
    moodInput.appendChild(buildOption("sad", "Sad"));
    moodInput.appendChild(buildOption("confused", "???"));
    moodInput.appendChild(buildOption("indifferent", "Not sure if taco or burrito"))
    return moodInput;
}

//builds park html element utilizing build element from domManager.js
const buildEntryHtml = entryObject => {
    const entryArticle = buildElement("article");
    entryArticle.appendChild(buildElement("h3", undefined, entryObject.conceptsCovered));
    entryArticle.appendChild(buildElement("p", undefined, entryObject.journalEntry));
    entryArticle.appendChild(buildElement("p", undefined, entryObject.journalDate));
    entryArticle.appendChild(buildElement("p", undefined, entryObject.mood));
    return entryArticle;
};