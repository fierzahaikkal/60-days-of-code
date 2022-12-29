import React, { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Content = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPostById();
  }, []);

  const updatePost = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/posts/${id}`, {
        title,
        content,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getPostById = async () => {
    const response = await axios.get(`http://localhost:5000/posts/${id}`);
    setTitle(response.data.title);
    setContent(response.data.content);
  };
  return (
    <Container className="my-3">
      <Form onSubmit={updatePost}>
        <div>
          <Form.Group className="d-inline" controlId="TitleForm">
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title Here"
              className="bg-transparent border-0 fs-2"
            ></Form.Control>
          </Form.Group>
        </div>
        <hr></hr>
        <Form.Group className="mb-3" controlId="Textarea">
          <Form.Control
            as={"textarea"}
            rows={15}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Tulis sesuatu..."
            className="bg-transparent border-0"
          ></Form.Control>
        </Form.Group>
        <div className="col-auto ">
          <Button type="submit" className="btn mb-3 col-auto" variant="success">
            Simpan
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Content;
