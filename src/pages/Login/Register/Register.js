import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  let errorElement;
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  
  if(loading){
    return <Loading></Loading>
  }

  if(error){
    errorElement = <p className='text-danger'> Error: {error?.message}</p>  
  }

  if(user){
    navigate('/services');
  }

  const handleRegisterForm = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if(email && password){
      createUserWithEmailAndPassword(email, password);
    }
    console.log(email, password);
  };

  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="container w-25 mx-auto border p-5 mt-4 rounded-3">
        <h3 className="text-center text-info pb-4">Please Register</h3>
        <Form onClick={handleRegisterForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
            type="name" 
            placeholder="Enter Name" 
            />
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
          <p><small>{errorElement}</small></p>
        </Form>
        <p className="mt-4">
          Already have an account?
          <Link
            to="/login"
            className="text-primary text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
