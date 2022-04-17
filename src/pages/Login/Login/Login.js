import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  let errorElement;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  if(error){
    errorElement = <p className='text-danger'> Error: {error?.message}</p>  
  }

  if(user){
      navigate('/home');
  }

  const handleLoginForm = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if(email && password){
      signInWithEmailAndPassword(email, password);
    }
    console.log(email, password);
  }

  const navigateRegister = () => {
    navigate("/register");
  };

  return (
    <div className="container w-25 mx-auto border p-5 mt-4 rounded-3">
    <h3 className="text-center text-info pb-4">Please Login</h3>
    <Form onClick={handleLoginForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <p><small>{errorElement}</small></p>
    </Form>
    <p className="mt-4">New to Memorable Journey<Link to="/register" className="text-primary text-decoration-none" onClick={navigateRegister}>
        Please Register
      </Link>
    </p>
  </div>
  );
};


export default Login;