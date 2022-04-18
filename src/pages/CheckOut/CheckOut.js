import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h4>Services Id: {serviceId}</h4>
            <div className="container w-25 mx-auto border p-5 mt-4 rounded-3">
        <h3 className="text-center text-info pb-4">Service Check Out</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
            required
            type="name" 
            placeholder="Enter Name" 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              required
              type="text"
              placeholder="Address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              required
              type="text"
              placeholder="Phone"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Check Out
          </Button>
        </Form>
      </div>
            
        </div>
    );
};

export default CheckOut;