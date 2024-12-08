function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect handling of zero values
  }
  return a / b;
}

console.log(myFunction(10, 0)); // Returns 0 instead of Infinity or an error