import React from "react";

class Line extends React.Component {
  render() {
    return <div className={this.props.position} />;
  }
}

export default Line;
