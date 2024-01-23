import { Link } from "@reach/router";
import React from "react";
import Button from "../Button/Button";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.app}>
      <nav>
        <div className={classes.brand}>
          <Link to="/" className={classes.navLink}>
            <h1>Ollyo</h1>
          </Link>
        </div>
        <div className={classes.menu}>
          <ul>
            <li>
              <Link to="/" className={classes.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={classes.navLink}>
                About
              </Link>
            </li>
            <li>
              <Link to="/blogs" className={classes.navLink}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/help" className={classes.navLink}>
                Help
              </Link>
            </li>
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
