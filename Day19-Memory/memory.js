/*
JavaScipt automatically allocates memory when object are created and frees it
when they are not used anymore (garbage collection)

memory life cycle
1. Allocate the memory you need
2. Use the allocated memory (read, write)
3. Release the allocated memory when it is not needed anymore
*/

// Value Initialization

const n = 123; //allocate number
const s = "abcd"; //allocate string

const o = {
  a: 1,
  b: null,
  c: "str",
}; //allocate object memory

const r = [1, null, "str"]; //allocate array (like object)

const a = (n) => {
  return n / 2;
}; //allocate function (callable object)

document.addEventListener("click", () => {
  //argumen
}); //function expression also allocate an object

//Allocation via function calls

const d = new Date(); //allocate date function

const xc = document.getElementById("#"); //allocate DOM Element

//some methods allocate new values or objects

const s1 = "stringless";
const s2 = s1.substring(0, s1.length - 3); // s2 is new string, output: stringl
//since string are immutable values
// javascript not allocate in memory
// they just store the [0, s1.length - 3] range values

const rr = ["other", "level", "country"];
const r2 = ["this", "doesnt", "make", "sense"];
const c2 = rr.concat(r2);
// new array rr concat with r2
// output: [ 'other', 'level', 'country', 'this', 'doesnt', 'make', 'sense' ]
