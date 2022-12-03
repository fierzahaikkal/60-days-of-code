const data = {
  username: ["anya12"],
  password: ["#1Friwxsaw"],
  mail: ["arda@ac.id"],
};

const register_btn = document.getElementById("register-btn");
register_btn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const mail = document.getElementById("mail").value;

  const register = new SignUp(username, password, mail);
  if (register == true) {
    alert(`Username: ${username} and Password: ${password} and Mail: ${mail}`);
  }
});

function SignUp(uname, passw, mail) {
  this.username = uname;
  this.password = passw;
  this.mail = mail;
  const regex = /^[A-Za-z]\w{7,14}$/;

  if (this.password.length < 8) {
    alert("Password must have at least 8 character");
    return false;
  } else if (!regex.check(this.password)) {
    alert("Password must contain ");
    return false;
  } else {
    data.username.push(this.username);
    data.password.push(this.password);
    data.mail.push(this.mail);
    alert("Register Success");
    return true;
  }
}
