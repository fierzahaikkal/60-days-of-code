const URI = (keyword) => {
  return `https://jsonplaceholder.typicode.com/${keyword}`;
};

const getKeyword = (keyword) => {
  return fetch(URI(keyword), { method: "GET" })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Gagal memproses");
      }
    })
    .then((value) => {
      console.log(value);
    })
    .catch((error) => console.error("Gagal melakukan fetch: ", error));
};

const diplayDatas = (data) => {
  data.data.users.forEach((user) => displayProduct(user));
};

const displayData = (value) => {
  const userLi = document.createElement("li");
  userLi.textContent = value.name;

  const userUl = document.getElementById("users");
  userUl.appendChild(userLi);
};

const clearProducts = () => {
  console.clear();
  const productUl = document.getElementById("products");
  productUl.textContent = "";
};
const buttonClick = () => {
  const promise = getKeyword(document.getElementById("keyword1").value);
  URI(promise);

  promise
    .then(function (value) {
      return value.data.users;
    })
    .then(function (users) {
      clearProducts();
      users.forEach(function (user) {
        displayProduct(user);
      });
    })
    .catch(function (error) {
      alert(error.message);
    })
    .finally(function () {
      console.log("Selesai memproses Promise");
    });
};
