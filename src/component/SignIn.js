import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="signin-wrapper mt-5">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 className="text-center">Sign In</h2>

            <Form className="mt-4">
              <Form.Group>
                <Form.Label>Enter Your Email</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Enter Your Pasword</Form.Label>
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                />
              </Form.Group>
              <Button variant="primary" size="lg" className="px-5 mb-4">
                Login
              </Button>
            </Form>

            <Button variant="primary" size="lg" className="px-5 mr-3">
              Google
            </Button>
            <Button variant="primary" size="lg" className="px-5">
              Facbook
            </Button>
            <Link className="d-block mt-4" to="/signup">
              Don't Have any account
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignIn;
