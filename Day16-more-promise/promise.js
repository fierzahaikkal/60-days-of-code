//fetch api
const posts = () => fetch("https://jsonplaceholder.typicode.com/posts");
const author = (id) =>
  fetch("https://jsonplaceholder.typicode.com/users/" + id);
const comment = (id) =>
  fetch("https://jsonplaceholder.typicode.com/users/" + id);

//getting obj
let getPosts = posts().then((res) => res.json());
let getAuthor = getPosts
  .then((res) => author(res.id))
  .then((res) => res.json());

let getComment = getPosts
  .then((res) => comment(res.id))
  .then((res) => res.json());

getPosts
  .then((postRes) => {
    getAuthor
      .then((authorRes) =>
        getComment.then((commentRes) => ({
          postRes,
          authorRes,
          commentRes,
        }))
      )
      .then((result) => {
        console.log(result.postRes);
        console.log(result.authorRes);
        console.log(result.commentRes);
      });
  })
  .catch((err) => console.log(err));
