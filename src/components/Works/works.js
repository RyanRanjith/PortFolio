import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/tp.jpeg';
import Portfolio2 from '../../assets/sl.png';
import Portfolio3 from '../../assets/csudh.png';



const Works = () => {
  return (
    <section id = 'works'>
        <h2 className="worksTitle">My Experience</h2>
        <div className="jobs">
            <img src={Portfolio1} alt="" className="wrk" />
          <span className='tp'> Customer Service Associate <br></br>January 2021 - December 2022</span>
          <img src={Portfolio2} alt="" className="wrk" />
          <span className='sl'> Associate-CS <br></br> January 2022 - July 2022</span>
          <img src={Portfolio3} alt="" className="wrk" />
          <span className='csudh'> IT Analyst <br></br>March 2023 - Current</span>
        </div>
        
</section>


  )
}

export default Works
