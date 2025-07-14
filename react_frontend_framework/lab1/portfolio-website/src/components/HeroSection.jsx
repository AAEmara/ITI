import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div id="hero">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1 className="mb-3">Abdelrahman Emara</h1>
            <h2 className="mb-4">Fullstack Web Developer</h2>
            <Button id="contact-btn1" href="mailto:abdelrahmanemara18@gmail.com">Contact Me</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
