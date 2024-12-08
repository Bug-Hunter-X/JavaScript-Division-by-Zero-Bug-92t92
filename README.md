# JavaScript Division by Zero Bug

This repository demonstrates a common error in JavaScript: incorrect handling of division by zero.  The `myFunction` in `bug.js` returns 0 instead of throwing an error or returning `Infinity` when a division by zero occurs. The corrected version in `bugSolution.js` addresses this issue by explicitly checking for division by zero.

## How to reproduce

1. Clone the repository.
2. Open `bug.js` and run the code in a JavaScript environment (e.g. Node.js).
3. Observe the incorrect result.
4. Open `bugSolution.js` and run the improved code. 

## Solution

The corrected version uses a try-catch block to handle the potential `ZeroDivisionError` or explicitly checks for the divisor being 0 and then handles accordingly.