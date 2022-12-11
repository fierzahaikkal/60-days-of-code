//fetch api
const posts = () => fetch("https://jsonplaceholder.typicode.com/posts/1");
const author = (id) =>
  fetch("https://jsonplaceholder.typicode.com/users/" + id);
const comment = (id) =>
  fetch("https://jsonplaceholder.typicode.com/users/" + id);

//getting promise obj
let getPosts = posts().then((res) => res.json()); //posts obj
let getAuthor = getPosts //author obj
  .then((res) => author(res.id))
  .then((res) => res.json());

let getComment = getPosts //comment obj
  .then((res) => comment(res.id))
  .then((res) => res.json());

//getting obj values 8using promise chaining
getPosts //post value
  .then((postRes) => {
    getAuthor //author value
      .then((authorRes) =>
        getComment.then((commentRes) => ({
          //comment value and combined result
          postRes,
          authorRes,
          commentRes,
        }))
      )
      .then((result) => {
        //display result
        console.log(result.postRes);
        console.log(result.authorRes);
        console.log(result.commentRes);
      });
  })
  .catch((err) => console.log(err)); //error handling
