import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
       <p>
  Hi! I'm Azimakhanım Gadirli, a Computer Engineering graduate from the National Aviation Academy, 
  specializing in robust backend development. My technical foundation was built through intensive 
  training at <b>Jet Academy</b> and the <b>Code For Future</b> program—a prestigious initiative 
  by the Ministry of Science and Education of the Republic of Azerbaijan and Code Academy.
  <br /><br />
  With hands-on experience in C# and ASP.NET Core, I focus on building scalable web solutions. 
  Beyond development, my time at <b>Guys Group</b> allowed me to refine my skills while 
  taking on a mentoring role, where I actively share knowledge and support fellow developers. 
  I'm driven by solving real-world challenges and am currently looking for new opportunities 
  to create impact.
</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro