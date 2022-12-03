const data = {
  username: ["anya12"],
  password: ["#1Friwxsaw"],
  mail: ["arda@ac.id"],
};

const submit_btn = document.getElementById("submit");

submit_btn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const login = new Login(username, password);
  if (login == true) {
    alert(`Username: ${username} and Password: ${password}`);
  }
});

function Login(uname, passw) {
  this.username = uname;
  this.password = passw;

  if (
    data.username.includes(this.username) &&
    data.password.includes(this.password)
  ) {
    alert("Login Success");
    return true;
  } else if (
    !data.username.includes(this.username) ||
    !data.password.includes(this.password)
  ) {
    alert("Login Failed! Check your username/password");
    return false;
  }
}
