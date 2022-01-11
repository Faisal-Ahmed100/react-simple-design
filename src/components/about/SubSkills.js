import React from "react";
import Progress from "./Progress";

const SubSkills = () => {
  return (
    <>
      <div className="about-texts">
        <h2>Skills</h2>
        <p className="about-text-p">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <h3>My Skill is :)</h3>

        <div className="skill-progress">
          
            <span className="skill-top-text">Html</span>
          
          <Progress done="100" />
          
             <span className="skill-top-text">Css</span>
          
          <Progress color='#1C6DD0' done="95" />
          
            <span className="skill-top-text">JavaScript</span>
          
          <Progress color='#FFBD35' done="90" />
          
            <span className="skill-top-text">React Js</span>
          
          <Progress color='#000B49' done="85" />
        </div>
      </div>
    </>
  );
};

export default SubSkills;
