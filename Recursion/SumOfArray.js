{
  /***

    Find the sum of given array using recursion
    
*/
}

// function sumOfArray(arr, n) {
//   if (n === 0) return arr[0];
//   return arr[n] + sumOfArray(arr, n - 1);
// }

// let arr = [1, 2, 3, 4, 5];

// console.log(sumOfArray(arr, arr.length - 1));

// Find the sum of all the even number in given array using recursion

let arr = [7, 2, 3, 11, 10];

function sumOfOddNumbers(arr, n) {
  if (n === 0) return arr[0] % 2 === 0 ? arr[0] : 0;
  let sum = sumOfOddNumbers(arr, n - 1);
  return arr[n] % 2 === 0 ? sum + arr[n] : sum;
}

console.log(sumOfOddNumbers(arr, arr.length - 1)); // otput: 7 + 3 + 5 = 15
