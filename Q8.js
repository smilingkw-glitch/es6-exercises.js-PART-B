let nums = [10, 3, 7, 20, 13, 2];

// 1. Map - create array of squares
let squares = nums.map(num => num * num);
console.log("Squares:", squares);

// Helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 2. Filter - keep only prime numbers
let primes = nums.filter(isPrime);
console.log("Primes:", primes);

// 3. Reduce - find sum of all elements
let sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum:", sum);

// 4. Sort - arrange in descending order
let descending = [...nums].sort((a, b) => b - a);
console.log("Descending:", descending);
