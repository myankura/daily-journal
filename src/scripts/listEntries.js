//gets all of the entries from api and lists them in an array
const listJournalEntries = () => {
    getAllEntries().then(entriesArray => {
        console.log("entriesArray", entriesArray)
        let entriesFragment = document.createDocumentFragment();
        //loops through array and builds html elements
        entriesArray.forEach(entry => {
            let entryHtml = buildEntryHtml(entry);
            entriesFragment.appendChild(entryHtml);
        });
        //targets entry--log element by id, clears the element, and then appends the fragment
        const entrylogSection = document.querySelector("#entry--log");
        clearElement(entrylogSection);
        entrylogSection.appendChild(entriesFragment);
    });
};