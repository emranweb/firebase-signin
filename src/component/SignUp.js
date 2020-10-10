import React from "react";
import { Container, Row, Col, Form} from "react-bootstrap";

function SignUp() {
  return (
    <div className="signup-wrapper">
      <Container>
        <Row>
          <Col md="4">
            <h2>Sign Up Header</h2>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;