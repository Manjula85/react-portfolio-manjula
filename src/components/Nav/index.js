import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [categories] = useState([
    {
      name: "About",
      description: "A breif intro about me",
    },
    {
      name: "Portfolio",
      description: "All the projects I have done so far",
    },
    {
      name: "Contact",
      description: "A form to contact me",
    },
    {
      name: "Resume",
      description: "Downloadable qualifications",
    },
  ]);

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <header className='flex-row px-1'>
      <h1>Manjula</h1>
      <nav>
        <ul className="flex-row">
          <li>
            <h1><a data-testid="link" href="/">Oh Snap!</a></h1>
          </li>
          <li>
            <h2><a data-testid="about" href="#about">About me</a></h2>
          </li>
          {categories.map((category) => (
            <li className={`mx-1 ${
              currentCategory.name === category.name && 'navActive'}`} key={category.name}>
              <span onClick={categorySelected(category.name)}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
