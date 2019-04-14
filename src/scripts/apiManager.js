console.log("apiManager.js")

// create a variable to store the api url
const apiURL = "http://localhost:8088"

//fetching data from the api
const getAllEntries = () => fetch(`${apiURL}/entries`).then(response => response.json());

//posting data to the api
const postEntry = (entry) => {
return fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(entry)
})
}