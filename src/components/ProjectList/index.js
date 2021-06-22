import React, { useState } from "react";
import { Grid, Segment, Image, GridRow } from "semantic-ui-react";
//importing all the image paths here...
import dog_dash from "../../assets/portfolio/dog_dash.PNG";
import coders_bay from "../../assets/portfolio/coders_bay.PNG";
import covid_positivity from "../../assets/portfolio/covid_positivity.PNG";
import nosql from "../../assets/portfolio/nosql.PNG";
import note_taker from "../../assets/portfolio/note_taker.PNG";
import orm_mapping from "../../assets/portfolio/orm_mapping.PNG";
import timed_quiz from "../../assets/portfolio/timed_quiz.PNG";

const ProjectList = () => {
  const [photos] = useState([
    {
      name: "dog_dash",
      image_path: "dog_dash.ba9dd062",
      category: "portfolio",
      link: "https://dog-dash.herokuapp.com/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "coders_bay",
      image_path: "coders_bay.433e8425",
      category: "portfolio",
      link: "https://the-coders-bay-app.herokuapp.com/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "covid_positivity",
      image_path: "covid_positivity.97c87e95",
      category: "portfolio",
      link: "https://uot-project1-group07.github.io/project1-group07/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "nosql",
      image_path: "nosql.c8bbcdcf",
      category: "portfolio",
      link: "https://github.com/Manjula85/social-media-Manjula",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "note_taker",
      image_path: "note_taker.96f9df41",
      category: "portfolio",
      link: "https://manjula85.github.io/NoteTaker-Manjula/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "orm_mapping",
      image_path: "orm_mapping.ef54c58e",
      category: "portfolio",
      link: "https://github.com/Manjula85/e-commerce-Manjula",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "timed_quiz",
      image_path: "timed_quiz.1b938e9f",
      category: "portfolio",
      link: "https://manjula85.github.io/timed-quiz-Manjula/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
  ]);
  //build\static\media\coders_bay.433e8425.PNG
  return (
    // <div class="container">
    //   <div class="row">
    //     <div class="col">
    //       <Image
    //         src={coverImage}
    //         style={{ width: "40%", height: "auto" }}
    //         floated="left"
    //         alt="cover"
    //       //class="altProfile"
    //       />
    //     </div>
    //     <div class="col">
    //       Column
    //     </div>
    //     <div class="col">
    //       Column
    //     </div>
    //   </div>
    // </div >
    
  <div>
    {photos.length ? (
      <section className="ui three cards">
        {photos.map((image) => (
          <div className="ui fluid card">
            <a href={image.link} target="_blank" rel="noreferrer">
              <div className="image">
                <img
                  //src={`./assets/portfolio/${image.name}.PNG`
                  src={require(`../../assets/portfolio/${image.name}.PNG`).default
                    //require(`./assets/portfolio/nosql.PNG`).default
                    //coverImage
                  }
                  alt={image.name}
                  key={image.name}
                />
                <h4 style={{ color: '#a3a3c2' }}>{image.name}</h4>
                <h4 style={{ color: '#a3a3c2' }}>{image.link}</h4>
              </div>
            </a>
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
