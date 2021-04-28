import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
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
  }
];

function App() {
  // const [categories] = useState([
  //   {
  //     name: "About",
  //     description: "A breif intro about me",
  //   },
  //   {
  //     name: "Portfolio",
  //     description: "All the projects I have done so far",
  //   },
  //   {
  //     name: "Contact",
  //     description: "A form to contact me",
  //   },
  //   {
  //     name: "Resume",
  //     description: "Downloadable qualifications",
  //   }
  // ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  //Testing
  console.log('All cat: ' + JSON.stringify(categories[0]));
  console.log('Current cat: ' + JSON.stringify(currentCategory));  //why???

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Portfolio currentCategory={currentCategory}></Portfolio>
        </div>
      </main>
    </div>
  );
}

export default App;
