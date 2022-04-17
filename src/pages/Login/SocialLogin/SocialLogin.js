import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import google from "../../../images/social/google.png";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-info w-50 d-block mx-auto mt-5"
      >
        <img src={google} alt="" />
        <span className="ms-2">Google Sign In</span>
      </button>
    </div>
  );
};

export default SocialLogin;
