import classes from "./App.module.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className={classes.app}>
      <nav>
        <div className={classes.brand}>
          <h1>Ollyo</h1>
        </div>
        <div className={classes.menu}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Help</li>
          </ul>
        </div>
        <div className={classes.nav__right}>
          <Button type="submit" text="Sign Up" />
        </div>
      </nav>
      <main>
        <h2>Hello world</h2>
        <p>
          As a fresh web developer, I'm embarking on an exciting journey to
          explore the vast world of web development. Proficient in HTML, CSS,
          JavaScript, React, Typescript, Redux, Axios, and Responsive design.
          I'm dedicated to honing my skills and building engaging user-friendly
          websites. I'm enthusiastic about open-source contributions and eager
          to collaborate on innovative projects. Join me as I evolve in the
          coding realm, one commit at a time. Let's code, learn, and create
          together!
        </p>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
