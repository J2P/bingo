import React from "react";
import classNames from "classnames";

class Cell extends React.Component {
  render() {
    var classes = classNames({
      cell: true,
      selected: this.props.selected
    });

    return (
      <div className={classes} onClick={e => this.props.onClick(this)}>
        <div className="circle" />
        {this.props.value}
      </div>
    );
  }
}

export default Cell;
