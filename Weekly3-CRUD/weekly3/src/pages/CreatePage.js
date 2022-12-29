import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const savePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/posts", { title, content });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="my-3">
      <Form onSubmit={savePost}>
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

export default CreateContent;
