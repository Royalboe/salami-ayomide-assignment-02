/**
 * sumOfNumbers calculates the sum of numbers in an array 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
  let sum = 0;
  for(i in arrayOfNumbers) {
    if (typeof arrayOfNumbers[i] == 'number') {
      sum += arrayOfNumbers[i]
    } else continue;
  }
    return sum;
}

function countEvenNumbers(arrayOfNumbers) {
  let count = 0;
  for(i in arrayOfNumbers) {
    if (typeof arrayOfNumbers[i] == 'number' && arrayOfNumbers[i] % 2 == 0) 
      count++;
    else continue;
  }
  return count;
}


function celsiusToFahrenheit(arrayOfNumbers) {
    let convertedArray = arrayOfNumbers.map((i) => {
      if (typeof i == 'number') {
        i = Math.trunc(i * (9/5) + 32);
        return i;
      }
    })
  return convertedArray;
}
 assignment.celsiusToFahrenheit = celsiusToFahrenheit;