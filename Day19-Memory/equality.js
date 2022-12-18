// sebelum masuk ke framework biar lebih peka terhadap hal kecil
// mencoba mengulang kembali quirk pada javascript

// =====================================Equality============================================

const a = 1;

if (a == "1") {
  console.log("Tipe data beda tetapi nilainya sama");
} else if (a === "1") {
  console.log("Tipe data dan nilai sama");
} // output: Tipe data beda tetapi nilainya sama
