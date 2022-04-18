import React from "react";
import { Figure } from "react-bootstrap";
import me from '../../images/me.jpg';

const About = () => {
  return (
    <div className="py-5">
      <h1 className="text-black">MD: Arif hossain</h1>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="image"
          src={me}
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
    </div>
  );
};

export default About;
