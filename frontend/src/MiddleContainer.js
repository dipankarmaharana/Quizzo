import React from "react";
import Marquee from "./Marquee";
import Description from "./Description";
import ExamList from "./ExamList";
import Services from "./Services";
import Contact from "./Contact";

const MiddleContainer = () => {
  return (
    <div className="middle-container">
      <Marquee />
      <Description />
      <ExamList />
      <hr />
      <Services />
      <Contact/>
    </div>
  );
};

export default MiddleContainer;
