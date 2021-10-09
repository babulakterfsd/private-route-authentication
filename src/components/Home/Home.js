import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <Container>
      <Row>
        <div className="col-12 col-md-10 col-8 mx-auto">
          {user.displayName ? (
            <h1 className="text-center mt-5">
              Welcome Home, Dear {user?.displayName}{" "}
            </h1>
          ) : (
            <span></span>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default Home;
