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
        . my dream is will be a good web developer as a full stack developer 
         because this in my one of my carrier goals. <br />
          and I hope it will be my future profession  and I know that I have to be very hard work for my dream next 3month, <br />
         . and my target is within 4monh I want to get a good job or intern at any software company. <br />
         I want to do very hard work for my dream. and want to go to soo far to web development carrier,
        </Figure.Caption>
      </Figure>
    </div>
  );
};

export default About;
