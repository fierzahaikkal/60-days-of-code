// =================================Function Context===================================

/*
First : Global Assumption
by default, until theres reason for execution context to change, this refers to global object.

Second: Value of this in Methods
When we have object with member that is a function, invoking that method from parent object
makes this the parent object

*/
let john = {
  firstName: "John",
  lastName: "Doe",
  timeTravel: (year) => {
    console.log(
      this.firstName + " " + this.lastName + " is time travel to " + year
    );
  },
};
john.timeTravel(1998);
//output: John Doe is time travelling to 1774

//also we can create new reference to another object
let tasya = {
  firstName: "Tasya",
  lastName: "Angular",
};

tasya.timeTravel = john.timeTravel;

//same as
tasya.timeTravel = (year) => {
  console.log(
    this.firstName + " " + this.lastName + " is time travel to " + year
  );
};
tasya.timeTravel(1885);
//Output: Tasya Angular is time travelling to 1774

//but when we do this
let getBackInTime = john.timeTravel;
getBackInTime(1774);
//output : undefined undefined is time travelling to 1774
/*
why undefined? because there is no object for getBackInTime, it makes
this context refers as window object (global)
*/
