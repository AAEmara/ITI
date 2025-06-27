import { Container, Row, Col, Card } from "react-bootstrap";
import StrategizeImg from "../assets/strategize-red.png";
import CascadeImg from "../assets/cascade.png";
import SeceneSmith from "../assets/scenesmith.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faNode,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import FlaskImg from "../assets/flask.png";

const PortfolioSection = () => {
  const projects = [
    {
      name: "Cascade",
      img: CascadeImg,
      technologies: [
        { type: "fontawesome", icon: faJs },
        { type: "fontawesome", icon: faNode },
      ],
      description: "",
      liveHost: null,
      github: "https://github.com/AAEmara/Cascade",
    },
    {
      name: "Strategize",
      img: StrategizeImg,
      technologies: [
        { type: "fontawesome", icon: faPython },
        { type: "image", icon: FlaskImg },
        { type: "fontawesome", icon: faVuejs },
      ],
      description: "",
      liveHost: "https://aaemara.github.io/Strategize/",
      github: "https://github.com/AAEmara/Strategize",
    },
    {
      name: "SceneSmith",
      img: SeceneSmith,
      technologies: [
        { type: "fontawesome", icon: faJs },
        { type: "fontawesome", icon: faReact },
      ],
      description: "",
      liveHost: "https://scene-smith-cw1s.vercel.app/",
      github: "https://github.com/AAEmara/SceneSmith",
    },
  ];

  return (
    <Container className="py-5">
      <h1>Portfolio</h1>
      <Row className="d-flex justify-content-center">
        {projects.map((project) => (
          <Col xs={12} sm={6} md={3} key={project.name}>
            <Card className="my-3">
              <Card.Img variant="top" src={project.img} />
              <Card.Title className="pt-1 ps-1">{project.name}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <div className="d-flex justify-content-center">
                {project.technologies.map((technology, idx) => {
                  if (technology.type === "fontawesome") {
                    return (
                      <FontAwesomeIcon
                        className="me-2"
                        icon={technology.icon}
                        size="2x"
                        key={idx}
                      />
                    );
                  } else if (technology.type === "image") {
                    return (
                      <img
                        className="me-2"
                        src={technology.icon}
                        style={{ width: 32, height: 32 }}
                        key={idx}
                      />
                    );
                  }
                })}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PortfolioSection;
