import React from 'react';
import css from "./Projects.module.css";

function Projects() {
  return (
    <div className={css.container}>
      <ul>
        <li className={css.card}>
          <div className={css.content}>
            <span className={css.title}>Ice Cream Project</span>
            <a href="" className={css.button}>see the site</a>
            <span className={css.stack}>HTML5, CSS, JS</span>
          </div>
        </li>
        <li className={css.card}>
          <div className={css.content}>
            <span className={css.title}>Ice Cream Project</span>
            <a href="" className={css.button}>see the site</a>
            <span className={css.stack}>HTML5, CSS, JS</span>
          </div>
        </li>
        <li className={css.card}>
          <div className={css.content}>
            <span className={css.title}>Ice Cream Project</span>
            <a href="" className={css.button}>see the site</a>
            <span className={css.stack}>HTML5, CSS, JS</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
