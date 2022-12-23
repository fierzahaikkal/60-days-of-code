import React from "react";
import { Container, Button } from "react-bootstrap";

const content = () => {
  return (
    <Container>
      <Button
        href="#"
        types="submit"
        className="d-inline float-end"
        variant="success"
      >
        Simpan
      </Button>{" "}
      <br></br>
      <br></br>
      <hr></hr>
      <h1>Simpan Elemen</h1>
    </Container>
  );
};

export default content;
