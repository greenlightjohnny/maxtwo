import React from "react";
import classes from "./modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxx from "../../../hoc/Auxx/Auxx";
class modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Auxx>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Auxx>
    );
  }
}

export default modal;
