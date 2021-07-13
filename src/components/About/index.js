import React from "react";
import coverImage from "../../assets/cover/current-pic.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about"> The About section</h1>
      <br></br>

      <div>
        <img
          src={coverImage}
          style={{ width: "40%", height: "auto" }}
          floated="left"
          alt="cover"
          //class="altProfile"
        />
        <h4>
          I am an aspiring 'Full Stack Developer'. I am currently employed in
          the maintenance sector as a maintenance assistant. The inspiration
          towards creating a software was first as a solution for many issues I
          find myself at work. There are many tasks like keeping track of
          inventory and cataloguing purchases still being done through
          inefficient methods. I knew that it required more custom software, but
          I lacked the knowledge to do it. I did try to solve issues like
          keeping track of orders I purchased through learning SQL but I wasn't
          able to develop more on it. Even though I did try to learn other
          software online it was a very slow process. So that is when I thought
          of joining this course. But other than just solving the issues at work
          I would love to move into a better paying software development sector
          one day!
        </h4>
      </div>
    </section>
  );
}

export default About;
