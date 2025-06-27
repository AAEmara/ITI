import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const PortfolioSection = () => {
  const projects = [
    { name: "Cascade", github: "https://github.com/AAEmara/Cascade" },
    { name: "Strategize", github: "https://github.com/AAEmara/Strategize" },
    { name: "SceneSmith", github: "https://github.com/AAEmara/SceneSmith" },
  ];

  return (
    <Container className="py-5">
      <Row className="g-4">
        {projects.map((project) => (
          <Col xs={12} sm={6} md={3} key={project.name}>
            <Card>
              <Card.Body className="d-flex align-items-center justify-content-center p-0">
                {project.name}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PortfolioSection;
