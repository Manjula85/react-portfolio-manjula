import React from "react";

function Resume() {
  return (
    <section className="my-5">
      <p>
        Download my{" "}
        <span>
          <b>
            <a href="Resume.txt" download>
              RESUME
            </a>
          </b>
        </span>
      </p>
      <br />

      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </section>
  );
}

export default Resume;
