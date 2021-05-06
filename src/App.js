import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";

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

function App() {

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  console.log('Current category:'+JSON.stringify(currentCategory.name));

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>

        {
          {
            'About': <About />,
            'Portfolio': <Portfolio />,
            'Contact': <ContactForm />,
            'Resume': <h1>NOT YET</h1>
          }[currentCategory.name]
        }     

      </main>
    </div>
  );
}

export default App;
