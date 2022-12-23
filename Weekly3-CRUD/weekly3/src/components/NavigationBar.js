import { Container, Navbar } from "react-bootstrap";

const navbarSection = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="fw-bold" href="/">
          DOCFILE.
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default navbarSection;
