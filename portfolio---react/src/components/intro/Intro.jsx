import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
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
          <p>Hello! My name is Azimaxanim Qadirli, and I am a 4th-year Computer Engineering student at the National Aviation Academy, studying my specialty in English.

Over the past several months, I have gained valuable experience as a Junior .NET Developer, working with technologies such as C#, ASP.NET Core, MVC, and MSSQL to build robust and efficient web applications. To further advance my skills in this field, I have completed internships at Jet Academy and Guys Group, where I deepened my expertise in backend development and software engineering.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro