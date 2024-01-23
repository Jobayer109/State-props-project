import React from "react";
import Button from "../Button/Button";
import Layout from "../Layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <h1>Hello world</h1>
      <p style={{ textAlign: "justify" }}>
        As a fresh web developer, I'm embarking on an exciting journey to
        explore the vast world of web development. Proficient in HTML, CSS,
        JavaScript, React, Typescript, Redux, Axios, and Responsive design. I'm
        dedicated to honing my skills and building engaging user-friendly
        websites. I'm enthusiastic about open-source contributions and eager to
        collaborate on innovative projects. Join me as I evolve in the coding
        realm, one commit at a time. Let's code, learn, and create together!
      </p>

      <Button text="Explore more" type="button" />
    </Layout>
  );
};

export default Home;
