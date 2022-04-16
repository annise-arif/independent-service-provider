import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='bg-secondary py-5 my-3'>
            <p className='py-5 text-light'><small>copyright &copy; Anis hussain Arif {year}</small></p>
        </footer>
    );
};

export default Footer;