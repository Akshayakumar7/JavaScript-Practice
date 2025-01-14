//Destructuring Arrays

const numbers = [1, 2, 3, 4];
const [first, second] = numbers;
console.log(first);
console.log(second);

//Destructuring Objects

const person = {
  userName: "John",
  age: 30,
  city: "New York",
};

// Extract properties
const { userName, age } = person;

console.log(userName);
console.log(age);

//Default Values

const [a = 5, b = 10] = [1];
console.log(a);
console.log(b);


//Nested Destructuring

const user = {
    id: 1,
    profile: {
      username: "john_doe",
      email: "john@example.com"
    }
  };
  const { profile: { username, email } } = user;
  console.log(username);
  