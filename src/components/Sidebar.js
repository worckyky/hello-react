import React from 'react';

const Sidebar = () => {
  return (
    <nav className={'sidebar'}>
      <ul className={'sidebar__list'}>
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
      <div className={'sidebar__settings'}>
        <a href="/">Settings</a>
      </div>
    </nav>
  );
};

export default Sidebar;
