// ==========================================
// 1. VARIABLE DECLARATIONS
// ==========================================
let username = "Alex";
let age = 28;
let isActive = true;
let count = 10;
const API_URL = "https://api.example.com";

// ==========================================
// 2. COMMON TYPES & UNIONS
// ==========================================
let scores = [90, 85, 100];
let tags = ["typescript", "javascript"];

let userId = "usr_101";

let flexibleData = "Hello from 'any'";
let inputData = "Some payload";

// ==========================================
// 3. OBJECTS & TUPLES
// ==========================================
// Note: Interfaces are type-checking constructs only, 
// so the User interface is omitted in pure JavaScript.

const user = {
  id: 1,
  name: "Sarah"
};

// Tuples in JS are simply standard arrays
let httpResponse = [200, "OK"];

// ==========================================
// PRINT ALL VALUES TO CONSOLE
// ==========================================
console.log("--- Basic Variables ---");
console.log(`Username: ${username}, Age: ${age}, Active: ${isActive}`);
console.log(`Count: ${count}`);
console.log(`API URL: ${API_URL}\n`);

console.log("--- Arrays & Unions ---");
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Tags: ${tags.join(", ")}`);
console.log(`User ID: ${userId}`);
console.log(`Flexible Data: ${flexibleData}`);

if (typeof inputData === "string") {
  console.log(`Input Data (Uppercase): ${inputData.toUpperCase()}\n`);
}

console.log("--- Object & Tuple ---");
console.log(`User Object: ID=${user.id}, Name=${user.name}`);
console.log(`HTTP Response: Status=${httpResponse[0]}, Message=${httpResponse[1]}`);