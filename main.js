// // Loop Function with Do While running from 1 to 1000 with the += 1000 without it loop would stop at 999
// const loopFunction = () => {
//     let loopText = ""
//     let i = 1;
//     do {
//       loopText += "The number is " + i;
//       i++;
//       console.log(`${loopText}`)
//     }
//     while (i <= 1000);
    
// }
// loopFunction()

// // An object (an array with keys and values) called person with the following data
// const personInfo = () => {
//     let person = {
//         firstName: "Jane",
//         lastName: "Doe",
//         birthDate: "Jan 5, 1925",
//         gender: "female"
//     }
//     let searchBirth;
//     for (searchBirth in person) {
//         console.log(``)
//     }
// }

function myFunction() {
    var person = {fname:"John", lname:"Doe", age:25}; 
    
    var text = "";
    var x;
    for (x in person) {
      text += person[x] + " ";
      if(person.age  & 1) {
        console.log(`${text}`)
      } else {
        return false
      }
    }
    
  }
  myFunction()