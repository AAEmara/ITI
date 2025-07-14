import { Container, Row, Col, Button, Image } from "react-bootstrap";
import AbdelrahmanEmara from "../assets/abdelrahman-emara.jpg";

const BioSection = () => (
  <section
    style={{
      background: "#f8f9fa",
      padding: "48px 0",
      width: "100%",
    }}
  >
    <Container>
      <Row className="align-items-center">
        <Col
          xs={12}
          md={5}
          className="mb-4 mb-md-0 d-flex justify-content-center"
        >
          <Image
            src={AbdelrahmanEmara}
            roundedCircle
            alt="Abdelrahman Emara"
            id="bio-image"
          />
        </Col>

        <Col xs={12} md={7}>
          <h3 className="mb-4" id="about-me-title">
            About Me
          </h3>
          <p className="mb-4" id="bio-content">
            Hi, I'm Abdelrahman Emara, a passionate Fullstack Web Developer with
            experience in building modern, scalable web applications using
            React, Node.js, Flask and more. I love solving problems and learning
            new technologies.
          </p>
          <Button
            id="download-resume-btn1"
            as="a"
            href="https://drive.google.com/uc?export=download&id=1DnwhbVQG-opCfSEday6DaK1XUI9FhBa8"
            target="_blank"
            download
          >
            Download Resume
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default BioSection;
