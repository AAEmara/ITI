import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const NavBar = () => {
  const itemsCount = useSelector((state) => state.cart.totalItems);

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
            <div>
              <Link to="/cart">
                <Button variant="light">
                  <FontAwesomeIcon className="me-2" icon={faCartShopping} />
                  <sup
                    style={{
                      background: "grey",
                      fontWeight: "bold",
                      color: "white",
                    }}
                    className="p-1 rounded-2"
                  >
                    {itemsCount}
                  </sup>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
