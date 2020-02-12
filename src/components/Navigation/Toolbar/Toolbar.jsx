import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems.jsx";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle.jsx";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle showSide={props.showSide} clickMenu={props.clickMenu} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
