import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light">
        <Container className="d-flex flex-row justify-content-between">
          <Link
            className="navbar-brand"
            to="/products"
            style={{ color: "green", fontWeight: "bold" }}
          >
            Products App
          </Link>
          <div className="d-flex flex-row">
            <Link to="/register">
              <Button variant="light" style={{ fontWeight: "bold" }}>
                Register
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="light" style={{ fontWeight: "bold" }}>
                Login
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="light">
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
