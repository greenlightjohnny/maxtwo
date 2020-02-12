import React from "react";
import classes from "./DrawerToggle.module.css";
const drawerToggle = props => {
  console.log(props);
  return (
    <div className={classes.DrawerToggle} onClick={props.clickMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;
