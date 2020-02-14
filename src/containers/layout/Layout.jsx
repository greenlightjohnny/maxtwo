import React from "react";
import Auxx from "../../hoc/Auxx/Auxx";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer.jsx";
import classes from "./layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar.jsx";

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggle = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    console.log(this.sideDrawerClosedHandler);
    return (
      <Auxx>
        <Toolbar
          showSide={this.state.showSideDrawer}
          clickMenu={this.sideDrawerToggle}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxx>
    );
  }
}

export default Layout;
