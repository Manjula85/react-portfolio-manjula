import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory} = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1 stripe-2">

      <nav>
        <br></br>
        <h1 >Manjula</h1>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            ><h3>
              <span onClick={() => {
                setCurrentCategory(category)
                }}>
                {capitalizeFirstLetter(category.name)}
              </span>
              </h3>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
