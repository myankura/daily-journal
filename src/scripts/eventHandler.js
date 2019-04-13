// const handleSave = document.querySelector("#submit--save").addEventListener("click", event

const handleSave = () => {
    const conceptInput = document.querySelector("#concept--input").value;
    const entryInput = document.querySelector("#journalEntry--input").value;
    const dateInput = document.querySelector("#date--input").value;
    const moodInput = document.querySelector("#mood--select").value;


    console.log("The save button has been clicked.")
    const newEntry = {
        concept: conceptInput,
        entry: entryInput,
        date: dateInput,
        mood: moodInput
    }
    console.log("new entry: ", newEntry);
    //post the entry to journal
    postEntry();

};