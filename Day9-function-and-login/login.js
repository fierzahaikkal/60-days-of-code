//simpel plain login no JS Framework

const account = {
  username: ["anakojol11", "bapako193"],
  password: ["167abcd", "153yuta"],
};

user_username = "anakojol11";
user_password = "167abcd";

const login = (username, password) => {
  if (
    account.username.includes(username) &&
    account.password.includes(password)
  ) {
    console.log("Login Sukses");
  } else {
    console.log("Username/Password salah, cek kembali.");
  }
};
login(user_username, user_password);
