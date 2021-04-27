import React, { useState } from "react";
import photo from "../../assets/portfolio/coders_bay.PNG";

const ProjectList = ({category}) => {
  const [photos] = useState([
    {
      name: "Coders bay",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "Covid positivity",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "NoSQL",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "Note taker",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "ORM mapping",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
    {
      name: "Timed quiz",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper tempor luctus. Integer volutpat, tortor.",
    },
  ]);

  // ????
  const currentPhotos = photos.filter((photos) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/portfolio/${i}.PNG`).default}
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
