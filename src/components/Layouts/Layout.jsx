import React from "react";
import Button from "../Button/Button";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
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
      <main className={classes.container}>{children}</main>
      <footer>
        <div>
          <h2>Ollyo</h2>
        </div>
        <div className={classes.footer__links}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Help</li>
          </ul>
        </div>
        <div className={classes.footer__links}>
          <ul>
            <li>Facebook</li>
            <li>Github</li>
            <li>Linkedin</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default Layout;
