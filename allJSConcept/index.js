// class in javascript

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  encryptPasword() {
    return `${this.password}abc`;
  }
}

const user = new User("John", "john@gmail.com", "123");

// console.log("user", user);

// behind scene

function UserNew(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}

const newUser = new UserNew("user", "user@gmail.com", "9193");

// console.log(newUser,">>>")

//Linked list

class Node {
  constructor(data) {
    this.data = data; // The value stored in the node
    this.next = null; // Pointer to the next node (initially null)
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Start with an empty list
  }

  // Method to add a node at the end
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      // If the list is empty
      this.head = newNode;
      return;
    }

    let current = this.head; // Start at the head
    while (current.next !== null) {
      // Traverse to the end
      current = current.next;
    }
    current.next = newNode; // Link the new node
  }

  // Method to display the list
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data); // Print the data of the current node
      current = current.next; // Move to the next node
    }
  }
}

const myList = new LinkedList();
myList.append(10); // Add 10 to the list
myList.append(20); // Add 20 to the list
myList.append(30); // Add 30 to the list

myList.printList(); // Output: 10, 20, 30
