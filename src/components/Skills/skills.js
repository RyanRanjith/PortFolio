import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Education</span>
        <span className="skillDesc"> </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Bachelors in Electronics and Communication<br></br> 2016-2020</h2>

                    <p>Anna Univeristy, Chennai, India.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Masters in Computer Science</h2>
                    <p>California State University, Dominguez Hills, California,US.</p>
                </div>
            </div>
            
            </div>
            
        
    </section>
  );
}

export default skills;
