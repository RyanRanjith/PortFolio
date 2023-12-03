import React, { useRef } from 'react';
import './contact.css';
import walmart from '../../assets/parking.webp';
import Adobe from '../../assets/hiring.jpeg';

import FacebookIcon from '../../assets/LinkedIn_Icon.png';
import TwitterIcon from '../../assets/Github_Icon.png';
import YouTubeIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vvdmmxw', 'template_du6t41u', form.current, 'BdPQJtfoJzixs57m8')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent ')
      }, (error) => {
           console.log(error.text);
        });
    };

  return (
    <section id="contactPage">
        <div id="clients">
        <h1 className="contactPageTitle">My Projects</h1>
        <span className='b'><br></br> I’ve successfully executed a project that revolves around an Intelligent Vehicle Parking System, employing a combination of C++ programming and embedded systems. This endeavor involved seamlessly integrating hardware components, notably Arduino devices and RF tags, 
        to achieve a cohesive and functional solution. </span>
        <span className='m'> <br></br> During my masters I and my teammates developed the application using Reactnative and 
        SQL for hiring nearby cab drivers.</span>

       <div className="clientImgs">
        <img src={walmart} alt="Client" className="clientImg" />
        <img src={Adobe} alt="Client" className="clientImg" />
        
       </div>
        </div>
        <div id="contact">
         <h1 className="contactPageTitles">Contact Me</h1>
         <span className="contactDesc">Please fill out the form below to discuss any work oppurtunities</span>
       
         <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='from_name' />
            <input type="email" className="email" placeholder='Your Email' name='from_email'/>
            <textarea className="msg" name='message'  rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
                  <a href="https://www.linkedin.com/in/ag-ranjith-6957011a2/">
                 <img src={FacebookIcon} alt="Facebook" className="link" />
                 </a>
                 <a href='https://github.com/RyanRanjith'>
                 <img src={TwitterIcon} alt="twitter" className="link" />
                 </a>
                 <a href='https://www.facebook.com/kingranjith.srikar'>
                 <img src={YouTubeIcon} alt="Youtube" className="link" />
                 </a>
                 <a href='https://www.instagram.com/ranjith_sreekar/'>
                 <img src={InstagramIcon} alt="Instagram" className="link" />
                 </a>
        </div>
       </form>
      
        </div>
        
    </section>
  )
}

export default Contact
