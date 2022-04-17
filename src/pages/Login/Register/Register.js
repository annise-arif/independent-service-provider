import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleForm = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
  };

  const navigateLogin = (event) => {
    navigate("/login");
  };
  return (
    <div>
      <div className="container w-25 mx-auto border p-5 mt-4 rounded-3">
        <h3 className="text-center text-info pb-4">Please Register</h3>
        <Form onClick={handleForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
