/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntries = [
    // {
    //     journalDate: "",
    //     conceptsCovered: "",
    //     journalEntry: "",
    //     mood: ""
    // },
    {
        journalDate: "02/25/19",
        conceptsCovered: "GitHub",
        journalEntry: "Today we learned how to use GitHub for the first time.",
        mood: "ok"
    },
    {
        journalDate: "02/27/19",
        conceptsCovered: "Working with the DOM",
        journalEntry: "Today we started working with the DOM",
        mood: "ok"
    },
    {
        journalDate: "02/28/19",
        conceptsCovered: "Beggining of JavaScript",
        journalEntry: "We have officially started working with JavaScript learning about functions, objects, and loops.",
        mood: "ok"
    }
] //End of journalEntries array

//Previous code from Daily Journal 2 exercise that is no longer needed.
// let arrayJournalEntry = [];

// arrayJournalEntry.push(objectsJournalEntry1);
// arrayJournalEntry.push(objectsJournalEntry2);
// arrayJournalEntry.push(objectsJournalEntry3);

//query the entryLog class from index.html and assign it to entryLogEl.
let entryLogEl = document.querySelector(".entryLog");

//format the html component and return it. 
const makeJournalEntryComponent = (entryData) => {
    return `
    <article class="entryLog">
        <h1>${entryData.conceptsCovered}</h1>
        <section>${entryData.journalEntry}</section>
        <aside>Date: ${entryData.journalDate}</aside>
        <aside>Mood: ${entryData.mood}</aside>
    </article>
    `
}
/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    //loop through journalEntries array
    for (let i = 0; i < journalEntries.length; i++) {
       let entry = journalEntries[i];
       //assign makeJournalEntryComponent function to a variable.
       let journalEntry = makeJournalEntryComponent(entry);
       //append journal entry to DOM
       entryLogEl.innerHTML += journalEntry;
    }
}

// Invoke the render function
renderJournalEntries(journalEntries);