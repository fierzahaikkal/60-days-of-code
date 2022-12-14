/*

penting:
- async mengembalikan promise
- await mengambil nilai promise setelah resolve

Keunggulan:
- mudah dibaca
- menulis async seperti sync
- efisien dibanding promise
*/

const getUser = async () => {
  try {
    //declaring async function return promise
    let res = await fetch("https://jsonplaceholder.typicode.com/users"); //get response from object that fetching
    let value = await res.json(); //get value from response

    Object.values(value).forEach((element) => {
      console.log(element);
    });
  } catch (error) {
    console.log("Terjadi error: " + error);
  }
};
getUser();
