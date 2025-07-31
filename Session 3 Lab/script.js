

// Question 1: 
// Solve the given problem using lodash module in node.js
// ● Create an object:
// const user = { name: 'John', age: 25, city: 'New York' };
// ● Use the omit() method of lodash module to create a new object excluding the age property.
// ● Use the pick() method of lodash module to extract only the name and city properties into a
// new object.
// ● Log both results to the console.


const _ = require('lodash');

const user = { name: 'John', age: 25, city: 'New York' };

const userWithoutAge = _.omit(user, ['age']);

const pickedUser = _.pick(user, ['name', 'city']);

console.log('User without age:', userWithoutAge);
console.log('Picked user:', pickedUser);

// Question 2 : 
// Solve the given problem using lodash module in node.js:
// ● Use the chunk() method to split an array [1, 2, 3, 4, 5, 6, 7, 8] into chunks of size 3.
// ● Use the flatten() method to flatten a nested array [[1, 2], [3, 4], [5, 6]].
// ● Log both results to the console.



const _ = require('lodash');


const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = _.chunk(array, 3);


const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = _.flatten(nestedArray);


console.log('Chunked Array:', chunkedArray);
console.log('Flattened Array:', flattenedArray);


// Question 3: 
// Solve the given problem using lodash module in node.js
// ● Create an array of objects:
// const users = [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35
// }, { name: 'David', age: 20 } ];
// ● Use the filter() method to find all users older than 25..
// ● Use the _.sortBy() method to sort the users by age in ascending order.
// ● Log filtered and sorted results to the console.


const _ = require('lodash');

const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 20 }
];


const filteredUsers = _.filter(users, user => user.age > 25);

const sortedUsers = _.sortBy(users, ['age']);

console.log('Filtered Users (age > 25):', filteredUsers);
console.log('Sorted Users by Age:', sortedUsers);


