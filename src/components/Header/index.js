import { Container, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="primary" className="mb-5">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#" className="text-light">
          Cafeteria
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}