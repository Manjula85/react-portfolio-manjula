import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Resume from "./components/Resume";
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
  console.log("Current category:" + JSON.stringify(currentCategory.name));

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
            About: <About />,
            Portfolio: <Portfolio />,
            Contact: <ContactForm />,
            Resume: <Resume />,
          }[currentCategory.name]
        }
      </main>
      <footer>
        <table className="footerTable">
          <tr>
            <td className="footerTableTd">
              <a href="mailto:mguneratne3@gamil.com">mguneratne3@gamil.com</a>
            </td>
            <td className="footerTableTd">
              <a href="https://github.com/manjula-guneratne">
                https://github.com/manjula-guneratne
              </a>
            </td>
            <td>
              <a href="https://twitter.com/MGuneratne">
                https://twitter.com/MGuneratne
              </a>
            </td>
          </tr>
        </table>
      </footer>
    </div>
  );
}

export default App;
