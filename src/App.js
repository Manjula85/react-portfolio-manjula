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
  const [contactSelected, setContactSelected] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            {/* <Portfolio currentCategory={currentCategory}></Portfolio> */}
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
