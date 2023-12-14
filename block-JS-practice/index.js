Create a fetch request to https://api.chucknorris.io/jokes/random and console.log() the data that is returned.

async const fetchFunction = () => { // adding a try catch...
    const response = await fetch(" https://api.chucknorris.io/jokes/random");
    const Json = await response.json();
    console.log(Json);
}



function disemvowel(string) {
  // your code here...
  let newStr = '';
  let vowels = 'aeiouAEIOU';
  for (let i = 0; i < string.length; i++) {
    const currentLetter = string[i];
    if (!vowels.includes(currentLetter)){
        newStr.push(currentLetter); // newStr += currentLetter, push is an array method
    }
  }
  return newStr;
}




//Uncomment the lines below to test your function:

// console.log(disemvowel('Fullstack')); // => 'Fllstck'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'