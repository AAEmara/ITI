import { Container } from "react-bootstrap";
import RegistrationForm from "../components/RegistrationForm";

const Registration = () => {
  return (
    <Container className="mt-3">
      <h2 className="text-center" style={{ color: "green" }}>
        Register and Shop Now with Products App!
      </h2>
      <RegistrationForm />
    </Container>
  );
};

export default Registration;
