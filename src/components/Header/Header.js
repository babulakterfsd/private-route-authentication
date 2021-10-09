import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar className="py-3 bg-success" expand="md">
        <Container fluid>
          <Navbar.Brand className="text-secondary fw-bolder">
            <Link
              to="/"
              className="text-white text-decoration-none fw-bolder ms-lg-5"
            >
              <i className="fas fa-user-lock text-warning me-1"></i>
              Authentic
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-md-0 me-lg-3 fw-semi-bold">
              <Link to="/home" className="text-decoration-none mx-2">
                <span className="text-white">Home</span>
              </Link>
              <Link to="/register" className="text-decoration-none  mx-2">
                <span className="text-white">Register</span>
              </Link>
              <Link to="/login" className="text-decoration-none mx-2">
                <span className="text-white">Login</span>
              </Link>
              <Link to="/shipping" className="text-decoration-none mx-2">
                <span className="text-white">Shipping</span>
              </Link>

              {user?.displayName ? (
                <div className="ms-md-5">
                  <img
                    src={user?.photoURL}
                    alt="user"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "100%",
                      marginRight: "5px",
                    }}
                  />
                  <span className="text-white fw-bolder ">
                    {user?.displayName}
                  </span>
                  <Link to="/login" className="text-decoration-none mx-2">
                    <Button
                      onClick={logOut}
                      className="btn-danger btn-sm fw-bold  text-white"
                    >
                      LogOut
                    </Button>
                  </Link>
                </div>
              ) : (
                <span></span>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
