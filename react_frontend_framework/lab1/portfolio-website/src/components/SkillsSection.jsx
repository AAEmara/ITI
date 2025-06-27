import React from "react";
import { Container, Col, Row, ProgressBar } from "react-bootstrap";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 80 },
    { name: "Bootstrap5", value: 90 },
    { name: "React.js", value: 75 },
    { name: "Node.js", value: 80 },
    { name: "Django", value: 60 },
    { name: "Flask", value: 75 },
  ];
  const focus = [
    "Web Development",
    "Designing RESTful APIs",
    "Database Optimization",
    "Problem Solving",
  ];
  return (
    <section id="skills-section">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center mt-5">
            <h3 id="skills-title">Skills</h3>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              culpa autem magni harum consequatur, iure commodi dolores soluta,
              sapiente iste quam corporis odio recusandae veritatis beatae
              libero facere unde voluptates.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={4} className="d-flex justify-content-center">
            <div className="mt-4 mb-3">
              <h4 id="focus-title">My Focus</h4>
              <ul id="focus-content">
                {focus.map((element) => (
                  <li key={element} id="focus-content">
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={6} md={8} className="mt-4 mb-3">
            {skills.map((skill) => (
              <Row key={skill.name}>
                <Col className="d-flex align-items-center">
                  <div className="me-3 mb-2" id="skill-name">
                    {skill.name}
                  </div>
                  <ProgressBar
                    className="mb-2 flex-grow-1"
                    now={skill.value}
                    label={`${skill.value}%`}
                  />
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
