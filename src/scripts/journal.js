
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