import React, { useState } from "react";
import dog_dash from "../../assets/portfolio_images/dog_dash.PNG"

const ProjectList = () => {
  const [photos] = useState([
    {
      name: "dog_dash",
      image_path: "dog_dash.ba9dd062",
      category: "portfolio",
      link: "https://dog-dash.herokuapp.com/",
      git_hub: "https://github.com/Manjula85/walk-my-dog",
      description:
        "This is a web application for seeking dog walker. Even though more and more people are working from home and have potentially more time to take care of their dogs, the reality is that some people have a job function that does not allow them to go outside for a dog walk. Even when the dog owner has time, he may want to spend it on other activities than walking the dog. Elderly people could also need help walking their dog especially during cold weather.",
      technologies: "Apollo/React-Hooks,Apollo-Boost, Graphql, React, JWT-Decode, React-Scripts, Semantic-UI, AWS S3, Apollo-Server-Express, Bcrypt, Express.js, JsonWebToken, Mongoose, Stripe"
    },
    {
      name: "coders_bay",
      image_path: "coders_bay.433e8425",
      category: "portfolio",
      link: "https://the-coders-bay-app.herokuapp.com/",
      git_hub: "https://github.com/Manjula85/codersbay",
      description:
        "The Coders Bay is an online forum where like minded individuals can post about all things that are code. If you need assistance with a project our coaches can work with you for a fee! Want a coding buddy? Join the chat room and get to know someone! Our goal is to provide a hub for knowledge and collaboration.",
      technologies: "JavaScript, Express, Node.js, Bootstrap, Socket.io, MySQL2, bcrypt, Express Handlebars, Sequelize"
    },
    {
      name: "covid_positivity",
      image_path: "covid_positivity.97c87e95",
      category: "portfolio",
      link: "https://uot-project1-group07.github.io/project1-group07/",
      git_hub: "https://github.com/Manjula85/project1-group07",
      description:
        "A site to help individuals who are self isolating due to covid have a positive mind set and give them information that has helped others in the past. Emotional and financial.",
      technologies: "HTML, CSS, CSS Frameworks (Materialize CSS and Semantic UI), Javascript and API's"
    },
    {
      name: "nosql",
      image_path: "nosql.c8bbcdcf",
      category: "portfolio",
      link: "https://github.com/Manjula85/social-media-Manjula",
      git_hub: "https://github.com/Manjula85/social-media-Manjula",
      description:
        "To give users access to a social network where they can share thier thoughts, react to friends' thoughts and create a friends list.",
      technologies: "JavaScript, Node, npm, Express, Moment, mongoose, routes"
    },
    {
      name: "note_taker",
      image_path: "note_taker.96f9df41",
      category: "portfolio",
      link: "https://manjula85.github.io/NoteTaker-Manjula/",
      git_hub: "https://manjula85.github.io/NoteTaker-Manjula/",
      description:
        "To create a Notepad where one can store, edit and delete data. The project uses express as the server to communicate with the HTML and CSS front-end with the JavaScript and Node.js back-end.",
      technologies: "JavaScript, Node, HTML, CSS, Express"
    },
    {
      name: "orm_mapping",
      image_path: "orm_mapping.ef54c58e",
      category: "portfolio",
      link: "https://github.com/Manjula85/e-commerce-Manjula",
      git_hub: "https://github.com/Manjula85/e-commerce-Manjula",
      description:
        "To create a website to monitor and manupulate store inventory and manage customer information.",
      technologies: "JavaScript, Node, npm, Express, dotenv, sequelize, express, routes"
    },
    {
      name: "timed_quiz",
      image_path: "timed_quiz.1b938e9f",
      category: "portfolio",
      link: "https://manjula85.github.io/timed-quiz-Manjula/",
      git_hub: "https://github.com/Manjula85/timed-quiz-Manjula",
      description:
        "Creating a quiz using DOM principles.",
      technologies: "HTML, CSS, JavaScript, Bootstrap, DOM"
    },
  ]);

  return (
    <div>
      {photos.length ? (
        <section className="card-container">
          {photos.map((image) => (

            <div>
              <h4 style={{ color: '#a3a3c2' }}>{image.name}</h4>
              <div className="flex-container">
                <div className="flex-image">
                  <img
                    //src={image.name.replace(/['"]+/g, '')}
                    //src={require(`../../assets/portfolio_images/dog_dash.PNG`).default}
                    src={`../../assets/portfolio_images/${image.name}.PNG`}
                    //src\assets\portfolio_images\coders_bay.PNG
                    //src\components\ProjectList\index.js
                    alt={image.name}
                    key={image.name}
                  />
                </div>
                <div className=" flex-description">
                  {image.description}
                  <br /><br />
                  <p><u>Technologies used</u></p>
                  {image.technologies}
                </div>
                <div className="flex-links">
                <p><u>Associated links</u></p>
                  <a href={image.git_hub} target="_blank" rel="noreferrer">Git Hub</a>
                  <br /><br /><br />
                  <a href={image.link} target="_blank" rel="noreferrer">Project link</a>
                </div>
              </div>
              <br />
            </div>

          ))}
        </section>
      ) : (
        <h3>No posts</h3>
      )}
    </div>
  );
};
export default ProjectList;
