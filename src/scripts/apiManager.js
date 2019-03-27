console.log("apiManager.js")

// create a variable to store the api url
const apiURL = "http://localhost:3000"

// fetch data from the api
fetch(`${apiURL}/entries`) // Fetch from the API
    .then(response => response.json()) // Parse as JSON
    // .then(parsedEntries => console.log(parsedEntries));
    .then(parsedEntries => {
        // What should happen when we finally have the array?
        parsedEntries.forEach(entries => {
            console.log(entries);
        })
    })

const getAllEntries = () => fetch(`${apiURL}/entries`).then(response => response.json());