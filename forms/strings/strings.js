let quoteString = "\"Failure is simply the opportunity to begin again this time more intelligently.\""

let upperCaseString = quoteString.toUpperCase(); 
  console.log(`Upper case string is: ${upperCaseString}`);

let authorString = "- Henry Ford"

completeString = quoteString + " " + authorString;

let found = completeString.includes("Henry");

  if (found == true) {
    console.log("Henry was in the quote string.");
  } else {
    console.log("Henry was NOT in the quote string.");
  }


let secondQuote = "\"Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King\""

let lowerCaseString = secondQuote.toLowerCase();

  console.log(`Lower case string is: ${lowerCaseString}`);
  

let newNumber = Number(prompt("Enter a number."))

let newSum = newNumber + 10

console.log(`The number ${newNumber} + 10 is ${newSum}.`);