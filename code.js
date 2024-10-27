//list of numbers from 1-10 using array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // should select 8
//How do I get the highest number first?
//Set up a for of loop for array arr to compare them to each other?

//create variable to store largest number
let biggestNumber = 0;
//declare outside since it console.log cannot see variables initialized in loops

//declare variable to store secondlargest number
let secondLargest = 0;

let thirdLargest = 0;

for (let x of arr) {

    //create variable to store current number
    let currentNumber = x; // you don't need to but its easier to understand at least for me


    if (currentNumber > biggestNumber) {
        //replace biggestNumber with currentNumber if bigger
        thirdLargest = secondLargest;
        secondLargest = biggestNumber;
        biggestNumber = currentNumber;
    }


    
}

//test
//console.log(biggestNumber);//How to find second largest?
console.log(thirdLargest);
