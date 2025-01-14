// ** Spread Operator**


//Copying an Array
const numbers = [1, 2, 3];
const copy = [...numbers];
console.log(copy);


//Combining Arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);


//Passing Arguments to Functions
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums)); 


//Copying an Object
const person = { name: "Alice", age: 25 };
const copyPerson = { ...person };
console.log(copyPerson);


//Merging Objects
const address = { city: "New York", country: "USA" };
const profile = { ...person, ...address };
console.log(profile); 


//Updating Object Properties
const updatedPerson = { ...person, age: 30 };
console.log(updatedPerson); 



////////////////////////////////////////////////////////////////////////////////

// ** Rest Operator **
