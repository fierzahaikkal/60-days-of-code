const existingdb = {
  username: ["abah23"],
  password: ["123abcd"],
};
const symbol = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
];

const user_username = "abah2s3";
const user_password = "adadasx";

const register = (username, password) => {
  //check username or password exists
  if (existingdb.username.includes(username)) {
    console.log("Username exist");
  } else if (password.length < 8 && symbol.includes(password) == false) {
    console.log("Password must greater than 8");
    console.log("Password must have number or symbol");
    if (existingdb.username.includes(password)) {
      console.log("Password exist");
      //check password length and symbol
    }
  } else {
    console.log("Register berhasil");
  }
};

register(user_username, user_password);
