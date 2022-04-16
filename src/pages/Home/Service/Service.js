import React from "react";
import { useNavigate } from "react-router-dom";
import './Service.css';

const Service = ({ service }) => {
  const { id, img, name, day, price, description } = service;
  const navigate = useNavigate();
  const handleServiceDetail = (id) =>{
    navigate(`/service/${id}`);
  }
  return (
    <div className='service'>
        <img src={img} className="w-100" alt="img" />
            <h2>{name}</h2>
            <p><small>{day} Days</small></p>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleServiceDetail(id)} className='btn btn-primary'>Book This Service</button>
        </div>
  );
};

export default Service;
