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
    console.log(this);
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

//Value of this in method invoked asynchronously
let flux = document.getElementById("flux-capacitor");
flux.addEventListener("click", john.timeTravel);
//Output: undefined undefined is time travelling to [object MouseEvent]
/*
permasalahan:
1. Tidak mendefinisikan argumen tahun pada .timeTravel()
2. Object yang dituju bukan john tetapi flux-capacitor
karena method yang kita pakai berperan sebagai event handler, sehingga
argumen pada event click akan diteruskan sebagai argumen pertama di event handler
3. Undefined Undefined karena object yang dituju adalah flux-capacitor
sehingga tidak ada property firstName dan lastName didalamnya
*/

// Fourth: Value of this Inside Constructor Functions

//when we create new object instance using Constructor,
//this value inside the function refers to its object

const TimeTraveler = (fname, lname, year) => {
  this.firstName = fname;
  this.lastName = lname;
  this.year = year;

  //Constructor function return
  //newly created object for us
  // unless we specifically return something else
};

let person = new TimeTraveler("John", "Doe", 1995);
console.log(
  person.firstName + " " + person.lastName + " is time travel to " + person.year
);
