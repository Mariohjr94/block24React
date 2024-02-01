const myReduce = (arr, callback, startingValue) => {
  let accumulator = startingValue;

  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }

  return accumulator;
};

const nums = [1, 2, 3, 4, 5];
const result = myReduce(nums, (a, b) => a + b, 0);

console.log(result); // => 15
