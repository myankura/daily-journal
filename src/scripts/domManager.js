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

//build an option
const buildOption = (optionValue, optionText) => {
    let optionElement = document.querySelector("#mood--select");
    optionElement = document.createElement("option");
    optionElement.setAttribute("name", optionValue);
    optionElement.textContent = optionText;
    return optionElement;
}


//builds park html element utilizing build element from domManager.js
const buildEntryHtml = entryObject => {
    // <h3>${conceptsCovered}</h3>
    // <p>${journalEntry}</p>
    // <p>${journalDate}</p>

    const entryArticle = buildElement("article");
    entryArticle.appendChild(buildElement("h3", undefined, entryObject.conceptsCovered));
    entryArticle.appendChild(buildElement("p", undefined, entryObject.journalEntry));
    entryArticle.appendChild(buildElement("p", undefined, entryObject.journalDate))
    return entryArticle;
  };