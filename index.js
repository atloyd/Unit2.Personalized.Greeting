// Personalized Greeting

// const firstName = "Austin";
// const lastName = "Loyd";
// let age = 26;
// let city = "Troy";

// console.log(
//   `Hello! My name is ${firstName} ${lastName}! I am ${age} years old, and I'm from ${city}. It's nice to meet you!`
// );

// let initials = firstName[0] + lastName[0];
// console.log(`My initials are: ${initials}`);

// let nameLength = firstName.length;
// console.log(`The length of your name is: ${nameLength} letters`);

// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

function sayGreeting(firstName, lastName, age, city) {
    console.log(
      `Hello! My name is ${firstName} ${lastName}! I am ${age} years old, and I'm from ${city}. It's nice to meet you!`
    );
  }
  
  sayGreeting("Austin", "Loyd", 26, "Troy");