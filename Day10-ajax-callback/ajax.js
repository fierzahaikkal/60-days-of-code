//belajar async dengan ajax
import user from "./user.js";

function getUser(form) {
  const uname = form.username.value;
  const passw = form.password.value;

  const ajax = new XMLHttpRequest();
  ajax.open("post", "login", true);
  ajax.onload = function () {
    if (ajax.status == "200") {
      const data = JSON.parse(ajax.responseText);
    }
  };
}

window.addEventListener(window, "load", function () {
  var loginForm = document.getElementById("loginForm");
  window.addEventListener(loginForm, "submit", function () {
    getUser(loginForm);
  });
});
