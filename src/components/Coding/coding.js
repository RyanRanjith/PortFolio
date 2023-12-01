import React from 'react'
import './coding.css'
import python from '../../assets/python.png';




const coding = () => {
  return (
    <section id = 'skills'>
        <h2 className="skillsd">My Skills</h2>
        <div className="skills1">
            <img src={python} alt="" className="p1" />
          <span className='pr'> Programming in Python,Java,Javascript</span>
          {/* <img src={Portfolio2} alt="" className="wrk" /> */}
          <span className='ml'> AI, Machine Learning, CloudComputing.</span>
          {/* <img src={Portfolio3} alt="" className="wrk" /> */}
          <span className='wb'> Website and application development</span>
        </div>
        
</section>
  )
}

export default coding
