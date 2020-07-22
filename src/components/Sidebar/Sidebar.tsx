import React from 'react';
import classes from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className={classes.sidebar}>
      <ul className={classes.sidebar__list}>
        <li>
          <NavLink
            to="/profile"
            className={`${classes.sidebar__link}`}
            activeClassName={`${classes.link__active}`}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dialogs"
            className={`${classes.sidebar__link}`}
            activeClassName={`${classes.link__active}`}
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={`${classes.sidebar__link}`}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={`${classes.sidebar__link}`}>
            Music
          </NavLink>
        </li>
      </ul>
      <div className={classes.sidebar__settings}>
        <NavLink to="/" className={`${classes.sidebar__link}`}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
