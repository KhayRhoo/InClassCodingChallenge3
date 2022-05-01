

//1 Convert the following function into an arrow function named "arrowMyFunction".
/* const myFunction = function (num1, num2) {
       return num1 + num2;
    };*/

const arrowMyFunction = (num1, num2) => {return num1 + num2};
console.log(arrowMyFunction(4, 6));

//2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
/*const add100 = function (money) {
     return money + 100;
};*/
 
const arrowAdd100 = (money) => money + 100;
console.log(arrowAdd100(100));
 
//3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
/*Examples:
countLetters('Hello my name is John', 'i') returns 1
countLetters('Hello my name is John', 'h') returns 2
countLetters('We love this city a lot, sometimes', 'e') returns 4
 */

function howMany(words, letter){
    var countLetters = 0;

   for (var position = 0; position < words.length; position++){ //words.lenth prints the amount of characters in words.
       if (words.charAt(position) == letter){ //charAt is basically position. So the position of words is 0 == the letter.
           countLetters += 1; //Increment?
       }
   }
    return countLetters;
}

console.log(howMany('Hello wendy, we will see william later.', 'w'));
//While I did everything else,I found this answer online. I tried sprending my time to understand it.

const myfunction = (num1,num2) => num1 + " is my favorite number";
console.log(myfunction(6));