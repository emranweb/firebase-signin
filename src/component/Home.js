import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Home() {
  return (
    <div className="home-wrapper">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mt-5">Welcome to Home</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;