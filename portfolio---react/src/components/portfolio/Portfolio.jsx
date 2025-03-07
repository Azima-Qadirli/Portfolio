import React from 'react';
import IMG1 from '../../assets/cental.jpg';
import IMG2 from '../../assets/greenshop.jpg';
import IMG3 from '../../assets/calculator.jpg';
import IMG4 from '../../assets/farmtofork.jpg';
import IMG5 from '../../assets/e-commerce.jpg';
import IMG6 from '../../assets/movie-site.jpg';
import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Cental',
      img: IMG1,
      description:
        'My first MVC project is a CarRent application featuring an Admin Panel for managing cars, users, and reservations. It incorporates user authentication with registration and login, showcasing my skills in  HTML, CSS, JavaScript, MVC, and ASP.NET to create organized, user-friendly web solutions.',
      technologies: 'C# | HTML | CSS | JavaScript | SCSS',
      link: 'https://cental.bsite.net/',
      github: 'https://github.com/Azima-Qadirli/CarRent',
    },
    {
      id: 2,
      title: 'FarmToFork',
      img: IMG4,
      description:
        'It is a website which is about agriculture products and their selling and it was created based on MVC technology. Here, we have home,blog,about us and contact us pages. Also, users can login and register to the website. Home,blog pages are controlled by admin in admin panel. Furthermore, messages written by users appear in the admin panel.',
      technologies: 'C# | HTML | CSS | JavaScript | SCSS',
      link: 'https://farmtofork.bsite.net/',
      github: 'https://github.com/Azima-Qadirli/FarmToFork',
    },
    {
      id: 3,
      title: 'GreenShop',
      img: IMG2,
      description: 'This is my final project based on Api. It is an e-commerce website for selling plants.In this project, users can register,login to website and review all products. But only admin can add,update or delete products.Hence, admin has own login. ',
      technologies: 'C# | MSSQL |ASP.NET CORE',
      github: 'https://github.com/Azima-Qadirli/GreenShop',
    },
    {
      id: 4,
      title: 'Calculator',
      img: IMG3,
      description:
        'I created this calculator program based on Visual Form. It has standard,scientific,volume,currency,date calculator and also history to check previous calculations. ',
      technologies: 'Visual Form',
      github: 'https://github.com/Azima-Qadirli/CalculatorWinForm',
    },
    {
      id: 5,
      title: 'Mini E-Commerce',
      img: IMG5,
      description:
        'This e-commerce system, built with C#, ASP.NET Core, MSSQL, SignalR, and CQRS, includes user registration, login (Google & Facebook), product and order management, and authorization for specific endpoints. It also features real-time notifications via SignalR and QR code scanning for product details. The visible issues are frontend-related; this is only the backend. ',
      technologies: 'C# | MSSQL | ASP.NET Core | SignalR |',
      github: 'https://github.com/Azima-Qadirli/E-Commerce.git',
    },
    {
      id: 6,
      title: 'Movie-Site',
      img: IMG6,
      description:
        'Movie-Site provide information about films, including details about cast,trailers, user-rating. This website is based on CQRS,Mediator,Repository patterns, also it is created latest version of .Net(.Net9). ',
      technologies: 'C# | MSSQL | ASP.NET Core',
      github: 'https://github.com/Azima-Qadirli/MovieApi.git',
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
