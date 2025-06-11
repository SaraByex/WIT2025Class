/* write  function which counts vowels in a strig*/
function countVowels(word) {
  const vowels = "aeiouAEIOU";
  let count = 0;

/*check if the letters in the word are in vowels*/

  for (letter of word) {if (vowels.includes(letter)) {count ++}}

  return count;
}

console.log(countVowels("Ssenkatuuka"));

/*generate OTP/
we use random number*/

  /* since OTP is 6-digits, we shall multiply random number by 1000000*/

let OTP = Math.random() * 1000000;

/* to remove decimals, we call the floor method*/
let n = Math.floor(OTP);
/*convert number to a string*/ 
n = n.toString();
/* to ensure we LWAYS GET A 6-DIGIT NUMBER and insert 0's at beginning if less random number is created. we use padstart()*/
// if n.length == 6 padstart(6, 0)

let otp = n.padStart(6, '0');
{console.log(otp)};

 

// // Problem: Print numbers from 1 to n. For multiples of 3, print "Fizz", for multiples of 5 print "Buzz", and for both 3 and 5 print "FizzBuzz".
// // Input: 15
// // Output: [1, 2, "Fizz", 4, "Buzz", ..., "FizzBuzz"]

// let t = prompt("enter a number:")
// t = Number(n); //convert input to a number

// for (let i = 1; i <= t ; i++) {
    
//     if(i % 3 == 0 && i % 5 == 0) {console.log("FizzBuzz");}
    
//     else if (i % 3 == 0) {console.log("Fizz");}
    
//     else if (i % 5 == 0) {console.log("Buzz");}
    
//     else
//     {console.log(i);}

// };

// Problem: Return the longest word in a sentence.
// Input: "The quick brown fox"
// Output: "quick"