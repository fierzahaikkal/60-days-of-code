//membuat validator jika ada kondisi rejected
Promise.realRace = (promises) => {
  let indexPromises = promises.map((p, index) =>
    p.catch(() => {
      throw index;
    })
  );
  return Promise.race(indexPromises).catch((index) => {
    let p = promises.splice(index, 1)[0];
    p.catch((e) => console.log(e + " tumbang, kita lanjutkan saja"));
    return Promise.realRace(promises);
  });
};

//deklarasi pemain
let pemain1 = new Promise((resolve) => setTimeout(resolve, 30, "Pemain 1"));
let pemain2 = new Promise((resolve, reject) =>
  setTimeout(reject, 20, "Pemain 2")
);
let pemain3 = new Promise((resolve) => setTimeout(resolve, 40, "Pemain 3"));

//promise race untuk menghasilkan promise yang terlebih dulu dieksekusi
Promise.realRace([pemain1, pemain2, pemain3])
  .then((val) => console.log("Pemenang adalah: " + val))
  .catch((err) => console.log("Pertandingan dihentikan"));
