import React from 'react'
import './code.css'
import python from '../../assets/python.png';
import website from '../../assets/website_development.jpeg';
import ai from '../../assets/ai.jpeg';

const Code = () => {
    return (
      <section id='code'>
        <h2 className="skillsd">My Skills</h2>
        <div className="skills1">
          <img src={python} alt="" className="p1" />
          <span className='pr'> Programming in Python, Java, Javascript</span>
          <img src={website} alt="" className="w1" />
          <span className='ml'> AI, Machine Learning, Cloud Computing.</span>
          <img src={ai} alt="" className="a1" />
          <span className='wb'> Website and application development</span>
        </div>
      </section>
    );
  };

export default Code
