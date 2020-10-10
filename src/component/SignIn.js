import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {signInWithGoogle} from "../firebase/firebase-utils";

class SignIn extends React.Component {

    constructor(props){
        super();
        this.state={email:"", password:""}
    }

   submitForm=(e)=>{
       e.preventDefault();
       this.props.userData(this.state);
       this.setState({email:"", password:""})
    
   }
   
   inputChange= (e)=>{
      let name = e.target.name;
       this.setState({[name]:e.target.value})
   }


  render() {
    return (
      <div className="signin-wrapper mt-5">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h2 className="text-center">Sign In</h2>

              <Form className="mt-4" onSubmit={this.submitForm}>
                <Form.Group>
                  <Form.Label>Enter Your Email</Form.Label>
                  <Form.Control
                    size="lg"
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    value={this.state.email}
                    onChange={this.inputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Enter Your Pasword</Form.Label>
                  <Form.Control
                    size="lg"
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={this.state.password}
                    onChange={this.inputChange}
                  />
                </Form.Group>
                <Button type="submit" variant="primary" size="lg" className="px-5 mb-4">
                  Login
                </Button>
              </Form>

              <Button onClick={signInWithGoogle} variant="primary" size="lg" className="px-5 mr-3">
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
}

export default SignIn;
