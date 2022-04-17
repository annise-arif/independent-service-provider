import React from 'react';
import Service from '../Home/Service/Service';
import Hooks from '../Hooks/Hooks';

const Services = () => {
    const [services, setServices] = Hooks();
    return (
        <div className='container-fluid'>
        <h3 className='text-center text-primary mt-5 py-3'>Our Services</h3>
           <div className='services-container'>
           {
                services.map( service => <Service 
                key={service.id} 
                service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;