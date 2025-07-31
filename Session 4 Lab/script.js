
// Question 1: 
// Write a Node.js program to read the contents of a file named input.txt using the
// fs.readFile method. Implement a callback function to log the file's content if it is read successfully
// or log an error if the file cannot be read.


const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
  } else {
    console.log('File content:\n', data);
  }
});


// Question 2: 
// Write a Node.js function named fetchData that takes a url and a callback as
// arguments. Use setTimeout to simulate an asynchronous task that "fetches" data in 2 seconds.
// After 2 seconds, call the callback with either an error or a simulated response object containing {
// data: "Sample Data" }.


function fetchData(url, callback) {
  console.log(`Fetching data from ${url}...`);

  setTimeout(() => {
    
    const success = true; 

    if (success) {
      const response = { data: "Sample Data" };
      callback(null, response);
    } else {
      const error = new Error("Failed to fetch data");
      callback(error, null);
    }
  }, 2000);
}


fetchData('https://example.com/api', (err, result) => {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log('Success:', result);
  }
});

// Question 3: 
// Simulate a series of asynchronous tasks using callbacks. Write a program to:
// ● Read data from a file (fs.readFile).
// ● Append some text to the data (fs.appendFile).
// ● Save the updated data to a new file (fs.writeFile).
// Demonstrate how this leads to callback hell and include comments explaining each step.

const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }

  console.log('Step 1: File read successfully.');

  const updatedData = data + '\nAppended text at ' + new Date().toLocaleString();

  fs.appendFile('input.txt', '\n[Log] Appended something to output.txt', (err) => {
    if (err) {
      console.error('Error appending to input.txt log:', err.message);
      return;
    }

    console.log('Step 2: Log appended to input.txt.');

    fs.writeFile('output.txt', updatedData, (err) => {
      if (err) {
        console.error('Error writing to output.txt:', err.message);
        return;
      }

      console.log('Step 3: Updated data written to output.txt.');
    });
  });
});
