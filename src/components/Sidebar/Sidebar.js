import React from 'react';
import classes from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <nav className={classes.sidebar}>
      <ul className={classes.sidebar__list}>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/">Messages</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Music</a>
        </li>
      </ul>
      <div className={classes.sidebar__settings}>
        <a href="/">Settings</a>
      </div>
    </nav>
  );
};

export default Sidebar;
