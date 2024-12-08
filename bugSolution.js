function myFunction(a, b) {
  if (b === 0) {
    throw new Error("Division by zero"); // Throw an error
  }
  return a / b;
}

//Alternative solution:
function myFunction2(a,b){
    return b === 0 ? Infinity : a/b
}

console.log(myFunction(10, 0)); // Throws an error
console.log(myFunction2(10,0)) //returns Infinity