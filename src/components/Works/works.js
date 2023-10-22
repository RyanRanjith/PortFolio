import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/tp.jpeg';
import Portfolio2 from '../../assets/sl.png';
import Portfolio3 from '../../assets/csudh.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id = 'works'>
        <h2 className="worksTitle">My Experience</h2>
        <div className="jobs">
            <img src={Portfolio1} alt="" className="wrk" />
          <span className='tp'> IT Analyst <br></br>January 2021 - December 2022</span>
          <img src={Portfolio2} alt="" className="wrk" />
          <span className='sl'> IT Analyst <br></br> January 2022 - July 2022</span>
          <img src={Portfolio3} alt="" className="wrk" />
          <span className='csudh'> IT Analyst <br></br>March 2023 - Current</span>
        </div>
        
</section>
  )
}

export default Works
