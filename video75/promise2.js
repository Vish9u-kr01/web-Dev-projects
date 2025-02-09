// Function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        setTimeout(() => {
            const success = false; // Simulate success or failure

            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000); // Simulating a 2-second delay
    });
}

// Consuming the promise
fetchData()
    .then((data) => {
        console.log(data); // Executes if the promise is resolved
    })
    .catch((error) => {
        console.error(error); // Executes if the promise is rejected
    })
    .finally(() => {
        console.log("Fetching process complete.");
    });


    // Key Methods of Promises
// then(): Executes when the promise is resolved.
// catch(): Executes when the promise is rejected.
// finally(): Executes after the promise is settled (either resolved or rejected).