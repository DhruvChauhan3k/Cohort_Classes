const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = "Some data";
        resolve(data); // Resolve the promise with data
    }, 2000);
});

fetchData
    .then(result => {
        console.log("Data received:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
    console.log("Ans")
