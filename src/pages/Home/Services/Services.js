import React, { useEffect, useState } from 'react';
import Hooks from '../../Hooks/Hooks';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = Hooks();
    return (
        <div className='container-fluid'>
        <h3 className='text-center text-primary mt-5 py-3'>Our Services</h3>
           <div className='services-container'>
           {
                services.slice(0, 6).map( service => <Service 
                key={service.id} 
                service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;