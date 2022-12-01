//object and class is very important in OOP

// //init constructor
// function Person() {
//   this.name = "manifesta";
// }
// //protoype
// Person.prototype.sendMessage = function (msg, to) {
//   console.log(`Message: ${msg} to: ${to} from: ${this.name}`);
// };
// //objek
// const person1 = new Person();
// person1.sendMessage("Selamat malam", "arga");

function SignUp(uname, passw, mail) {
  var regex = /^[A-Za-z]\w{7,14}$/;
  this.username = uname;
  this.password = passw;
  this.mail = mail;

  if (this.password.length < 8) {
    alert("Password must have 8 character");
    this.password = "";
    return false;
  } else if (!regex.test(this.password)) {
    alert(`Password must contain ${regex}`);
    this.password = "";
    return false;
  }
}

const user1 = new SignUp("Rangga", "rasaAasss212aa", "xyz@gmail.com");
console.log(user1);
