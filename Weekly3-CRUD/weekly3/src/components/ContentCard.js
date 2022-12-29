import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ContentCard = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await axios.get("http://localhost:5000/posts");
    setPost(response.data);
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <Card
          style={{ width: "18rem" }}
          className=" my-3 mx-3 float-start border"
          bg={"light"}
        >
          <Card.Body className="d-inline" key={post.id}>
            <Card.Title className="mb-3">{post.title}</Card.Title>

            <Card.Text className="mb-5 d-flex justify-content-center align-items-center">
              {post.content}
            </Card.Text>
            <Card.Link
              onClick={() => {
                deletePost(post.id);
              }}
              href="/"
              className="float-end text-decoration-none"
            >
              Delete
            </Card.Link>
            <Card.Link
              href={`content/${post.id}`}
              className="float-end me-3 text-decoration-none"
            >
              View
            </Card.Link>
            <Card.Link
              href={`content/${post.id}`}
              className="float-end me-3 text-decoration-none"
            >
              Edit
            </Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContentCard;
