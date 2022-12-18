// ============================Dot Notation vs Bracket Notation=============================

// ______________getting value from the object using their key________________
const name = person.firstName; //getting person object name using firstName key

// or we can use bracket notation
const name2 = person["firstName"];

//with bracket notation we can do this

/* instead of
let doSomething = (doWhat) => {
  switch (doWhat) {
    case "doThisThing":
      //code..
      break;
    case "doThatThing":
      //code..
      break;
    case "doThisOtherThing":
      //code..
      break;
    default:
      //default statement
      break;
  }
};

*/

let thingsWeCanDo = {
  doThisThing: () => {
    /*code...  */
  },
  doThatThing: () => {
    /*code... */
  },
  doThisOtherThing: () => {
    /*code... */
  },
  default: () => {
    /*code... */
  },
};

let doSomething = (doWhat) => {
  let thingToDo = thingsWeCanDo.hasOwnProperty(doWhat) ? doWhat : "default";
  thingsWeCanDo[thingToDo]();
};

//________________getting element in an array_________________
let rr = thisArr[2]; //getting 2nd element of array
// index starting from 0
