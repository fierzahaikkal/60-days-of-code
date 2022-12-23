import React from "react";
import { Container, Button, Form } from "react-bootstrap";

const createContent = () => {
  return (
    <Container className="my-3">
      <Form className="row g-2">
        <div className="col-11">
          <Form.Group className="d-inline" controlId="TitleForm">
            <Form.Control
              type="text"
              placeholder="Title Here"
              className="bg-transparent border-0 fs-2"
            ></Form.Control>
          </Form.Group>
        </div>
        <div className="col-auto ">
          <Button href="#" type="submit" className="btn mb-3" variant="success">
            Simpan
          </Button>{" "}
        </div>
      </Form>
      <hr></hr>
      <Form>
        <Form.Group className="mb-3" controlId="Textarea">
          <Form.Control
            as={"textarea"}
            rows={16}
            placeholder="Tulis sesuatu..."
            className="bg-transparent border-0"
          ></Form.Control>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default createContent;
