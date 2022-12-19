//terusan dari materi quirk sebelumnya

// =============Function Expression VS Function Declaration===============
//terdapat dua cara untuk mendefinisikan fungsi di javaScript
/*
______Function Declaration_____
- Fungsi ini dikatakan named function
- fungsi ini tidak hanya terlihat di scope yang dideklrasikan
  tetapi juga didalam fungsi tersebut
  (berguna untuk memanggil fungsi rekursi)


Function Expression
*/

// Function Declaration: tidak membutuhkan keyword var (var, let, const )
function timeTravel(year) {
  console.log(
    this.firstName + " " + this.lastName + " is time traveling to " + year
  );
}

// Function Expression:
const someFn = function () {
  console.log("Hi there im function too");
};

// Function Expression: Declaring named Function inside
//fungsi ekspresi bisa deklrasi named function
// tetapi hanya bisa diakeses didalam scopenya
const someOtherFn = function namedFunc() {
  console.log("Hi there im function too");
  if (needExpression) {
    namedFunc(); //named function tidak bisa digunakan disini
  }
};
someOtherFn();

// ===========Named vs Anonymous Function===========
/* 
Fungsi anonymous : Tidak memiliki nama fungsi
* Hanya Function Expression yang bisa anonymous
*/

//Contoh:
const otherFn = function () {
  console.log("Hi im anonymous function");
};

// ATAU kita bisa gunakan arrow function
const otherOtherFn = () => {
  console.log("Hi im anonymous function");
};

// ATAU dilakukan didalam DOM
document.addEventListener("click", function () {
  console.log("Hi im anonymous function");
});

// ATAU dilakukan didalam DOM menggunakan arrow function
document.addEventListener("click", () => {
  console.log("Hi im anonymous function");
});

// =====================Immediately Invoked Function Expression====================
/*
Immediately Invoked Function Expressions (IIFE) adalah 
Fungsi yang tidak menugaskan variabel untuk diekskusi, maka akan segera dieksekusi

Karena Function Expressions akan mengembalikan nilai kita, agar bisa terlihat 
dipanggil secara immediate (segera) kita akan memanggil apa yang dikembalikan
function expressions dengan menambahkan paranthesis setelah expressionnya
*/
//contoh
(function () {
  return "Hai";
});

// ATAUPUN
(function () {
  return "Hai";
})();

// Kenapa IIFE berguna?
/*
- Membantu control scope
- lebih efisien karena tidak perlu mendeklarasikan banyak variabel
*/
