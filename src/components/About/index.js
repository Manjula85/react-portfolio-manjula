import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about"> The about section</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis
        at erat pellentesque adipiscing commodo elit at. Sed nisi lacus sed
        viverra tellus in. Eget magna fermentum iaculis eu non diam phasellus
        vestibulum lorem. Nibh tortor id aliquet lectus. Purus in mollis nunc
        sed id semper risus in hendrerit. Massa enim nec dui nunc mattis enim ut
        tellus elementum. Mattis vulputate enim nulla aliquet porttitor lacus
        luctus. Nisl rhoncus mattis rhoncus urna neque viverra. Ultrices in
        iaculis nunc sed augue lacus.
      </p>
    </section>
  );
}

export default About;
