import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    nameError: "",
    emailError: "",
    usernameError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const nameError = "Name is required";
  const emailError = "Invalid email format";
  const usernameError = "Username doesn't include spaces";
  const passwordError =
    "Password must be at least 8 characters long and include lowercase, " +
    "uppercase, at least one digit and a special character";
  const confirmPasswordError = "Should match the password above";

  const handleNameError = (value) => {
    if (!value.trim()) {
      setFormErrors({ ...formErrors, nameError });
    } else {
      setFormErrors({ ...formErrors, nameError: "" });
    }
  };

  const handleEmailError = (value) => {
    if (!value.match(/^\S+@\S+\.\S+$/)) {
      setFormErrors({ ...formErrors, emailError });
    } else {
      setFormErrors({ ...formErrors, emailError: "" });
    }
  };

  const handleUsernameError = (value) => {
    if (value.includes(" ")) {
      setFormErrors({
        ...formErrors,
        usernameError,
      });
    } else {
      setFormErrors({ ...formErrors, usernameError: "" });
    }
  };

  const handlePasswordError = (value) => {
    if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#_]).{8,}$/)) {
      setFormErrors({
        ...formErrors,
        passwordError,
      });
    } else {
      setFormErrors({ ...formErrors, passwordError: "" });
    }
  };

  const handleConfirmPasswordError = (value) => {
    if (formData.password !== value) {
      setFormErrors({
        ...formErrors,
        confirmPasswordError,
      });
    } else {
      setFormErrors({ ...formErrors, confirmPasswordError: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      nameError: formData.name.trim() ? "" : nameError,
      emailError: formData.email.match(/^\S+@\S+\.\S+$/) ? "" : emailError,
      usernameError: !formData.username.trim()
        ? "Username is required"
        : !formData.username.includes(" ")
        ? ""
        : usernameError,
      passwordError: formData.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#_]).{8,}$/
      )
        ? ""
        : passwordError,
      confirmPasswordError:
        formData.confirmPassword === ""
          ? "Enter the password confirmation"
          : formData.password === formData.confirmPassword
          ? ""
          : confirmPasswordError,
    };

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error !== "")) {
      return;
    }

    setValidated(true);
    alert(JSON.stringify(formData, " ", 2));
    navigate("/products");
  };

  return (
    <Container className="border rounded-3" style={{ maxWidth: "700px" }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="my-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Example: John Doe"
            value={formData.name}
            onChange={(e) => {
              const value = e.target.value;
              setFormData({ ...formData, name: value });
              handleNameError(value);
            }}
            isInvalid={!!formErrors.nameError}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.nameError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="my-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Example: john.doe@gmail.com"
            value={formData.email}
            onChange={(e) => {
              const value = e.target.value;
              setFormData({ ...formData, email: value });
              handleEmailError(value);
            }}
            isInvalid={!!formErrors.emailError}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.emailError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="my-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Example: jdoe99"
            value={formData.username}
            onChange={(e) => {
              const value = e.target.value;
              setFormData({ ...formData, username: value });
              handleUsernameError(value);
            }}
            isInvalid={!!formErrors.usernameError}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.usernameError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="my-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={formData.password}
            onChange={(e) => {
              const value = e.target.value;
              setFormData({ ...formData, password: value });
              handlePasswordError(value);
            }}
            isInvalid={!!formErrors.passwordError}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="my-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => {
              const value = e.target.value;
              setFormData({ ...formData, confirmPassword: value });
              handleConfirmPasswordError(value);
            }}
            isInvalid={!!formErrors.confirmPasswordError}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.confirmPasswordError}
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="mb-3" variant="success" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
