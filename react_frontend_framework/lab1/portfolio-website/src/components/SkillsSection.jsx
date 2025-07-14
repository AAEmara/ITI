import React from "react";
import { Container, Col, Row, ProgressBar } from "react-bootstrap";

const SkillsSection = () => {
  const skills = [
    { name: "Linux", value: 95 },
    { name: "GitHub", value: 95 },
    { name: "Git", value: 95 },
    { name: "Node.js", value: 85 },
    { name: "Django", value: 80 },
    { name: "Flask", value: 80 },
    { name: "Bootstrap5", value: 90 },
    { name: "HTML", value: 90 },
    { name: "CSS", value: 80 },
    { name: "React.js", value: 80 },
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
              Fullstack Developer passionate about building robust, 
              scalable web apps with Flask, Django, Node.js, and React.js.
               I thrive in Linux environments, with strong proficiency in 
               Git and GitHub for version control, collaboration, and CI/CD workflows. 
               Skilled in PostgreSQL, MongoDB, and Docker, with a 
               backend-first mindset and a love for clean, maintainable code.
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
