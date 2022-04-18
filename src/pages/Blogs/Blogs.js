import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-success py-5">
          Difference of Authorization and Authentication
        </h1>
        <div className="d-flex bg-light">
          <div className="border rounded-3 p-4 w-50">
            <h4>Authorization</h4>
            <p>
              Authorization determines what resources a user can access.
              Authorization works through settings that are implemented and
              maintained by the organization. Authorization always takes place
              after authentication. Authorization isn't visible to or changeable
              by the user.
            </p>
          </div>
          <div className="border rounded-3 p-4 w-50">
            <h4>Authentication</h4>
            <p>
              Authentication verifies who the user is. Authentication works
              through passwords, one-time pins, biometric information, and other
              information provided or entered by the user. Authentication is the
              first step of a good identity and access management process.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="text-success py-5">Why are you using firebase? and what other option do i have implement authentication</h1>
        <div className="d-flex bg-light">
          <div className="border rounded-3 p-4 w-50">
            <h4>Why are you using firebase</h4>
            <p>
              Owned by Google, Firebase is a complete package of products that
              allows to build web and mobile apps, improve the app quality and
              help your clients grow their business. and No need extra money
              spent for backend server Sync real time data in the application
              Quick display data in the application Faster then any backend web
              services
            </p>
          </div>
          <div className="border rounded-3 p-4 w-50">
            <h4>Other option to authentication without firebase</h4>
            <p>
            1. Okta is the #1 trusted platform to secure every identity, from customers
             to your workforce with SSO, Multi-factor Authentication, Lifecycle 
             Management <br />
             2. https://www.sciencedirect.com/topics/computer-science/basic-authentication
                <br />
             3. Amazon Cognito
                <br />
             4. Auth0
             <br />
             5. OneLogin
            </p>
          </div>
        </div>
      </div>

      
      <div className="container">
        <h1 className="text-success py-5">What other services does firebase provide other than authentication</h1>
        <div className="d-flex bg-light border ">
          <div className="border rounded-3 p-4 w-100">
            <h4 className="text-info">Other option to authentication without firebase</h4>
            <p>
            1. Parse Open Source Backend Platform <br />
             2. Back4app Parse Hosting Platform
                <br />
             3. Kinvey Mobile Backend as a Service (mBaaS) for the Enterprise
                <br />
             4. Backendless Mobile Backend and API Services Platform
             <br />
             5. Kuzzle Backend for web, hybrid, or native mobile apps and IoT projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
