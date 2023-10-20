import React from 'react';
import './intro.css';
import bg from '../../assets/Profile.JPG';


const Intro = () => {
  return (
  <section id="intro">
     <div className="introContent">
     <span className="hello">Hello,</span>
     <span className="introText">I'm <span className="introName">Ranjith Gopinath</span><br /></span>
     <p className="introPara">2021 N Beverly Plaza, LongBeach<br></br> California,US.<br></br><br></br>+15628377828<br></br>ranjithsreekarag@gmail.com</p>
    
     </div>
    <img src={bg} alt="Profile" className='bg' />
  </section>
  )
}

export default Intro;

