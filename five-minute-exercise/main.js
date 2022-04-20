/*
* Variables
* Create a variable and console log the value
*/

const someString = "Hello World!";
console.log(someString);

/*
* Create a variable, add 10 to it, and alert the value
*/

const someNumber = Math.random();
alert(someNumber + 10);

/*
* Functions
* Create a function that subtracts 4 numbers and alerts the difference
*/

const subtractFourNumbers = (num1,num2,num3,num4) => {
  const result = num1-num2-num3-num4; 
  alert(result);
  return result;
};
console.log(subtractFourNumbers(1,2,3,4));

/*
* Create a function that divides one number by another and returns the remainder
*/
const remainder = (num1,num2) => {
  return num1 % num2;
};
console.log(remainder(2,2));

/*
* Conditionals
* Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
*/
const addTwoNumbers = (num1,num2) => {
  if (num1+num2 > 50) return "Jumanji";
};
console.log(addTwoNumbers(50,50));

/*
* Create a function that multiplies three numbers and if the product is divisible by 3 alert ZEBRA 
*/
const divisibleByThree = (num1,num2,num3) => {
  const multipliedNumber = num1*num2*num3;
  if (multipliedNumber % 3 === 0) {
    alert("ZEBRA")
    return multipliedNumber % 3
  };
};
console.log(divisibleByThree(3,3,3));