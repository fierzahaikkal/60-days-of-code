//proxy nilai future (yang belum diketahui saat pembuatan promise)
// digunakan sebagai proxy untuk proses async
// promise mudah dan mirip synchronous

/*
memiliki dua nilai
- state => 1.) Pending ==> 2.) Fulfilled ==> if gagal 3.) Rejected
- result => 1.) Undefined => 2.) Value ==> if gagal 3.) Error

benefit promise :
- readable
- error handling yang rapih
- menghindari callback hell

perbedaan callback & promise:
- callback adalah function, promise adalah objek
- callbak dikirim melalui parameter, promise mengembalikan parameter
- callback digunanak untuk handling success & failure, promise tidak
- callback dapat digunakan untuk beberapa event, promise hanya satu event

bentuk promise 

const promise = new Promise(function(resolve, reject){
  if(success){
    resolve(value)
  }else{
    reject(error)
  }
})
*/

//=======================AJAX + PROMISE ===========================

function getProductsUrl(keyword) {
  return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
  // Code Promise Here!
  const promise = new Promise((resolve, reject) => {
    //code async
    const ajax = new XMLHttpRequest(); //inisialisai ajax
    ajax.onload = function () {
      //pemanggilan onload untuk menampilkan data
      if (ajax.status === 200) {
        const data = JSON.parse(ajax.responseText);
        resolve(data);
      } else {
        reject(Error("Gagal mengambil data!"));
      }
    };

    const url = getProductsUrl(keyword); //get url
    ajax.open("GET", url); //set request method
    ajax.send(); //melakukan request
  });
  return promise;
}

function clearProducts() {
  const productUl = document.getElementById("products");
  productUl.textContent = "";
}

function displayProduct(product) {
  const productLi = document.createElement("li");
  productLi.textContent = product.name;

  const productUl = document.getElementById("products");
  productUl.appendChild(productLi);
}

function buttonClick() {
  const promise = getProducts(document.getElementById("keyword").value); //mengambil nilai keyword untuk parameter
  //membuat promise then untuk mengambil data yang sudah terisi
  promise // promise((resolve, rejected)=>{}), resolve berperan sebagai nilai untuk param value
    .then((value) => {
      //param value menerima nilai dari resolve
      return value.data.products; //me return nilai dari resolve berupa object data product
    })
    .then((products) => {
      //melanjutkan then chaining dengan value.data.product sebagai nilai untuk param product
      products.forEach((product) => {
        //param product menerima nilai return
        displayProduct(product); //melakukan display produk
      });
    });
}
