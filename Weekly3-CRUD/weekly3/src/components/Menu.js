import { Container, Button } from "react-bootstrap";

const menuAction = () => {
  return (
    <Container>
      <Button
        href="/create"
        types="submit"
        className="d-inline float-end"
        variant="secondary"
      >
        + File
      </Button>{" "}
      <br></br>
      <br></br>
      <hr></hr>
    </Container>
  );
};

export default menuAction;
