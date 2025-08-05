

// Question 1:
//  Write a function fetchData() that returns a Promise. The promise should resolve with
// the message "Data fetched successfully!" after 2 seconds. Create another function displayData()
// that calls fetchData() and logs the resolved value to the console.


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

function displayData() {
  fetchData()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

displayData();

// Question 2: 
// Create a Promise chain to simulate the following workflow:
// ● Fetch user data (resolves with "User data fetched" after 1 second).
// ● Process the user data (resolves with "User data processed" after 1 second).
// ● Save the processed data (resolves with "User data saved" after 1 second).
// Write a function that implements this chain and logs each step’s result to the console.



function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data fetched");
    }, 1000);
  });
}

function processUserData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data processed");
    }, 1000);
  });
}


function saveUserData(processedData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data saved");
    }, 1000);
  });
}


function runWorkflow() {
  fetchUserData()
    .then((result1) => {
      console.log(result1); 
      return processUserData(result1);
    })
    .then((result2) => {
      console.log(result2); 
      return saveUserData(result2);
    })
    .then((result3) => {
      console.log(result3); 
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

runWorkflow();


// Question 3: 
// Simulate fetching data from three different APIs. Write a function fetchAPIs() that
// returns a Promise using Promise.all. Each API simulation should resolve with a different message
// ("API 1 data", "API 2 data", "API 3 data") after 1 second. Log all the resolved results together.


function fetchAPI1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API 1 data");
    }, 1000);
  });
}


function fetchAPI2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API 2 data");
    }, 1000);
  });
}


function fetchAPI3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API 3 data");
    }, 1000);
  });
}


function fetchAPIs() {
  Promise.all([fetchAPI1(), fetchAPI2(), fetchAPI3()])
    .then((results) => {
      console.log("All API results:", results);
    })
    .catch((error) => {
      console.error("Error fetching APIs:", error);
    });
}


fetchAPIs();
