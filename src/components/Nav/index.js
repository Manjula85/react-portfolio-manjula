import React from "react";

function Nav() {
  const categories = [
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
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <header>
      <h1>Manjula</h1>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
