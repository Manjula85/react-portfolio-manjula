import React, { useState } from "react";

const ProjectList = () => {
  const [photos] = useState([
    {
      name: "coders_bay",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
     },
    {
      name: "covid_positivity",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "nosql",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "note_taker",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "orm_mapping",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "timed_quiz",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    }
  ]);

  // ????
  //const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {photos.map((image) => (
          <img
            src={require(`../../assets/portfolio/${image.name}.PNG`).default}
            alt={image.name}
            className="imag-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}
export default ProjectList;
