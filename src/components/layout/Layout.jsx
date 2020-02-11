import React from "react";
import Auxx from "../../hoc/Auxx";

import classes from "./layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar.jsx";

const layout = props => {
  return (
    <Auxx>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Auxx>
  );
};

export default layout;
