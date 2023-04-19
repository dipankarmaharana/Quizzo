import React from "react";
import ServiceRow from "./ServiceRow";

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services.</h2>
      <ServiceRow 
      src="https://www.readersdigest.ca/wp-content/uploads/sites/14/2019/04/01-Hilarious-Dog-Memes-1024x701.jpg"
      title="e-Exam"
      serviceDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ab
            itaque quis maiores tempore numquam, rem consectetur, qui libero
            velit aut perspiciatis. Ut eveniet veritatis adipisci, rerum
            molestias modi magnam."
      />
      <ServiceRow 
      src="https://www.readersdigest.ca/wp-content/uploads/sites/14/2019/04/01-Hilarious-Dog-Memes-1024x701.jpg"
      title="e-Exam"
      serviceDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ab
            itaque quis maiores tempore numquam, rem consectetur, qui libero
            velit aut perspiciatis. Ut eveniet veritatis adipisci, rerum
            molestias modi magnam."
      />
    </div>
  );
};

export default Services;
