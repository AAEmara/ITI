import { Container, Row, Col, Button } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => (
  <footer>
    <Container>
      <Row className="mb-3">
        <Col
          xs={12}
          md={4}
          className="d-flex d-md-block justify-content-center justify-content-md-start"
        >
          <h3 id="contact-header">Get in Touch</h3>
        </Col>
      </Row>

      <Row className="align-items-start justify-content-center">
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column align-items-center align-items-md-start mb-4 mb-md-0"
        >
          <div className="mb-2 d-flex align-items-center" id="contact-links">
            <i className="fa-solid fa-envelope me-2"></i>
            <span>abdelrahmanemara18@gmail.com</span>
          </div>
          <div className="d-flex align-items-center" id="contact-links">
            <i className="fa-solid fa-phone me-2"></i>
            <span>+201014779662</span>
          </div>
        </Col>

        <Col
          xs={12}
          md={4}
          className="d-flex justify-content-center mb-4 mb-md-0"
        >
          <Button id="contact-btn2" href="mailto:abdelrahmanemara18@gmail.com">
            Contact Me
          </Button>
        </Col>

        <Col
          xs={12}
          md={4}
          className="d-flex flex-column align-items-center align-items-md-end"
        >
          <div className="mb-2">
            <a
              href="https://www.linkedin.com/in/abdelrahman-emara/"
              target="_blank"
              className="me-3"
              id="social-links"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/AAEmara"
              target="_blank"
              className="me-3"
              id="social-links"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://x.com/AplusEmara"
              target="_blank"
              id="social-links"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
          <div>
            <span id="copyright">Copyright &copy; 2025 AE.</span>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
