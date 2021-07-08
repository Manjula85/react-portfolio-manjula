import React, { useState } from "react";
import { Grid, Segment, Image, GridRow } from "semantic-ui-react";
//importing all the image paths here...
import git_hub_image from "../../assets/cover/GitHub-Mark.png";
import Project_link from "../../assets/cover/link_to_project.jpg";

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

  return (
    <div>
      <div class="grid-container">
        {photos.length ? (
          <section className="ui three cards">

            {photos.map((image) => (
              <div className="ui fluid card">

                <div className="image">
                  <img
                    src={require(`../../assets/portfolio/${image.name}.PNG`).default
                    }
                    alt={image.name}
                    key={image.name}
                    className="img-thumbnail mx-1"
                  />
                  <h4 style={{ color: '#a3a3c2' }}>{image.name}</h4>
                  <h4 style={{ color: '#a3a3c2' }}>{image.link}</h4>
                </div>

                <table>
                  <tr>
                    <td><img src="git_hub_image" alt="">Git hub</img></td>
                    <td><img src="Project_link" alt="">Project linj</img></td>
                  </tr>
                </table>
                <a href={image.link} target="_blank" rel="noreferrer">
                </a>
              </div>

            ))}

          </section>
        ) : (
          <h3>No posts</h3>
        )}
      </div>
    </div>
  );
};
export default ProjectList;
