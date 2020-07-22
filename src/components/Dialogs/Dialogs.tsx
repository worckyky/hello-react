import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>
        <div className={classes.dialog  + ' ' + classes.dialog_active}><NavLink to={'/'}>Толя</NavLink></div>
        <div className={classes.dialog}><NavLink to={'/'}>Ваня</NavLink></div>
        <div className={classes.dialog}><NavLink to={'/'}>Жора</NavLink></div>
        <div className={classes.dialog}><NavLink to={'/'}>Сева</NavLink></div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How are you</div>
        <div className={classes.message}>Priveat</div>
      </div>
    </div>
  );
};

export default Dialogs;
