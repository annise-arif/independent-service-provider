import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleForm = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
  }

  const navigateRegister = () => {
    navigate("/register");
  };

  return (
    <div className="container w-25 mx-auto border p-5 mt-4 rounded-3">
    <h3 className="text-center text-info pb-4">Please Login</h3>
    <Form onClick={handleForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          ref={passwordRef}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <p className="mt-4">New to Memorable Journey<Link to="/register" className="text-primary text-decoration-none" onClick={navigateRegister}>
        Please Register
      </Link>
    </p>
  </div>
  );
};


export default Login;