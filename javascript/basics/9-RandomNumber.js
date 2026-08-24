// Math.random() = returns a floating-point, pseudo-random number 
//                 between 0 (inclusive) and 1 (exclusive)

// 1. Basic random float between 0 and 1
let randomFloat = Math.random();
console.log(`Random Float (0-1): ${randomFloat}`);

// 2. Random integer between 1 and 6 (e.g., rolling a die)
let min = 1;
let max = 6;
let dieRoll = Math.floor(Math.random() * max) + min;
console.log(`Die Roll: ${dieRoll}`);

// 3. Random integer between a custom range (min to max inclusive)
let minRange = 10;
let maxRange = 50;
let randomInRange = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
console.log(`Random (10-50): ${randomInRange}`);

// 4. Random float with fixed decimal places
let randomPrice = Number((Math.random() * (100 - 10) + 10).toFixed(2));
console.log(`Random Price: $${randomPrice}`);
