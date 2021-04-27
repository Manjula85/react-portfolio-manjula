import React, {useState} from "react";
// import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
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
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

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
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
