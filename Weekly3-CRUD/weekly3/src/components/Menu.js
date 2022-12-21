import { Container, Button } from "react-bootstrap";

const menuAction = () => {
  return (
    <Container className="pb-5 border-bottom border-dark">
      <Button
        href="#"
        types="submit"
        className="d-inline float-end"
        variant="secondary"
      >
        + File
      </Button>{" "}
    </Container>
  );
};

export default menuAction;
