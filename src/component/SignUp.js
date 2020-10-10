import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function SignUp() {
  return (
    <div className="signup-wrapper mt-5">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2>Create an Account</h2>
            <Form>
              <Form.Group>
                <Form.Label>Enter Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  required
                  size="lg"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Enter Your Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  size="lg"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Enter Your Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  size="lg"
                />
              </Form.Group>
              <Button variant="primary" size="lg" className="px-5">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
