/* STRING METHODS */

// String concatonation
// let firstName = "Kenny";
// let lastName = "Quach";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// Getting characters
// Note that indexes in JavaScript start at 0 index. So the first character in the 
// string is at 0 index
// let firstName = "Kenny";
// let firstCharacter = firstName[0];
// console.log(firstCharacter);

// Get length
// let firstName = "Kenny";
// console.log(firstName.length);

// Get firstname in all uppercase
// let firstName = "Kenny";
// console.log(firstName.toUpperCase());

// Get firstname in all lowercase
// let firstName = "Kenny";
// console.log(firstName.toLowerCase());

// Get the index position of the "@" symbol
// let email = "kquach229@gmail.com";
// console.log(email.indexOf("@"));

// Get last index of "e". This gives you the index of the last occurence of the letter e
// let thing = "supermarket"
// console.log(thing.lastIndexOf("e"));

// Slice a section from a string. First argument is where to start 
// and second is where to end
// let email = "kquach229@gmail.com";
// console.log(email.slice(0, 9));

// Grab a section example 2 (substring). First argument is where to start, and
// second argument is how many characters to grab
// let email = "kquach229@gmail.com";
// console.log(email.substr(1,5));

// Replace a character
// let email = "kquach229@gmail.cot";
// console.log(email.replace("t", "m"));

/* NUMBERS */

// Addition
// let radius = 10;
// const pi = 3.14;
// console.log(radius + pi);

// Subtraction
// let radius = 10;
// const pi = 3.14;
// console.log(radius-pi);

// Multiplication
// let radius = 10;
// const pi = 3.14;
// console.log(radius*pi);

// Division
// let radius = 10;
// const pi = 3.14;
// console.log(radius/pi);

// Remainder
// let radius = 10;
// const pi = 3.14;
// console.log(radius % pi);

// Exponents
// let radius = 10;
// console.log(radius **2);

// Increment Method 1
// let likes = 1;
// likes+=1;
// console.log(likes);

// Increment Method 2
// let likes = 1;
// likes++;
// console.log(likes);

// Decrement Method 1
// let likes = 1;
// likes-=1;
// console.log(likes);

// Decrement Method 2
// let likes = 1;
// likes--;
// console.log(likes);

// NaN (Not a Number)
// console.log(5/ "Hello");

// Concat numbers into string
// let likes = 10;
// let result = "The blog has " + likes + " likes";
// console.log(result);
// console.log(typeof result);

// Concatonation methods

// Concatonation Way
// const title = "Best reads of 2019";
// const author = "Josh";
// const likes = 30;
// let result = "The blog called " + title + " by " + author + " has " + likes + " likes";
// console.log(result);

// Template String way
// const title = "Best reads of 2019";
// const author = "Josh";
// const likes = 30;
// let result =`The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// Create an array
// let ninjas = ["Kenny", "John", "Bobby"];
// console.log(ninjas);

// Get second element
// let ninjas = ["Kenny", "John", "Bobby"];
// console.log(ninjas[1]);

// Get the length of the array(how many elements)
// let ninjas = ["Kenny", "John", "Bobby"];
// console.log(ninjas.length);

// Join the elements of an array with a character in between each element
// let ninjas = ["Kenny", "John", "Bobby"];
// let result = ninjas.join(" , ")
// console.log(result);

// Find the index position of an element. Note that if does not exist, will return -1
// let ninjas = ["Kenny", "John", "Bobby"];
// let result = ninjas.indexOf("Bobby");
// console.log(result);

// Concat two arrays together
// let ninjas = ["Kenny", "John", "Bobby"];
// let result = ninjas.concat(["Ashley", "Maria", "Lisa"]);
// console.log(result);

// Concat two arrays together example 2
// let ninjas = ["Kenny", "John", "Bobby"];
// let citizens = ["Ashley", "Maria", "Lisa"];
// let result = ninjas.concat(citizens);
// console.log(result);

// Join two arrays together using the spread operator
// let ninjas = ["Kenny", "John", "Bobby"];
// let citizens = ["Ashley", "Maria", "Lisa"];
// let result = [...ninjas, ...citizens];
// console.log(result);

// Use push method to add on to the end of the array
// Note: Alters original value
// let ninjas = ["Kenny", "Bobby"];
// ninjas.push("Ashley");
// console.log(ninjas);

// Use pop to remove from end of array
// Note: This alters original value
// let ninjas = ["Kenny", "Bobby", "Ricky"];
// let result = ninjas.pop();
// console.log(result);
// console.log(ninjas);

/* Undefined */
// Undefined is a value that is yet to be determined
// It is not intentional

// Set the value of age to be undefined
// let age;
// console.log(age);

/* Booleans */

// Return a boolean depending on whether or not the character is in the string
// let email = "kquach229@gmail.com";
// let exist = email.includes("@");
// console.log(exist);

/* Comparison Operators */

// This will return to true, because 25 matches the value of age, regardless of data type
// let age = 25;
// console.log(age == 25);

// This will return false because the value does not match
// let age = 25;
// console.log(age == 30);

// This will return true because even though the data type 
// does not match, the value matches. The "==" just cares about the value matching
// let age = 25;
// console.log(age == "25");

// This will return false, because even though the value 
// matches, the data type does not match. The "===" is 
// strict and that means it has to be exactly the same
// for both value, and type
// let age = 25;
// console.log(age === "25");

// This will return true, because this (!=) means the it is not equal. 
// let age = 25;
// console.log(age != 30);

// This will return false, becuase in this case, once again it only cares about 
// the value of the age, regardless of datatype.(!=)
// let age = 25;
// console.log(age != "25");

// This will return true, because it does not match the datatype. The (!==) means that
// it is looking at both the value and datatype. In this case, the value matches,
// however, the datatype does not match. Therefore it is true that it does not match,
// hence we get a boolean value of true
// let age = 25;
// console.log(age !== "25");

// This will return true because age is greater than 20
// let age = 25;
// console.log(age > 20);

// This will return false because age is not less than 20
// let age = 25;
// console.log(age < 20); 

// This will return true, because though its not less than, but its equal to 25
// let age = 25;
// console.log(age <= 25);

// This will return true, because even though it is not more than, but it is
// equal to 25
// let age = 25;
// console.log(age >= 25);

// Will return true because it matches
// let name = "shaun";
// console.log(name == "shaun");

// Will return faulse because lowercase and uppercase letters are different
// let name = "shaun";
// console.log(name == "Shaun");

// Will return true, because the "s"  in shaun comes later in the sequence of
// alphabets than the "C" in crystal does
// let name = "shaun";
// console.log(name > "Crystal");

/* Type Conversion */

// Converts string to a number
// let score = "100";
// score = Number();
// console.log(typeof score);

// Converts number to string
// let name = 123456;
// name = String();
// console.log(typeof name);

// Converts number to string
// let result = String(50);
// console.log(typeof result);

// Positive numbers will return true
// let result = Boolean(100);
// console.log(typeof result, result);

// Negative numbers are also truthy values
// let result = Boolean(-5);
// console.log(typeof result, result);

// 0 will always return a falsy value
// let result = Boolean(0);
// console.log(typeof result, result);

// String values will return a truthy value
// let result = Boolean("0");
// console.log(typeof result, result);

// A string with no content will return falsy
let result = Boolean("");
console.log(typeof result, result);