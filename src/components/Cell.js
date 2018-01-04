import React from "react";

class Cell extends React.Component {
  render() {
    const selected = this.props.selected ? "selected" : "";

    return (
      <div
        className={`cell ${selected}`}
        onClick={e => this.props.onClick(this)}
      >
        <div className="circle" />
        {this.props.value}
      </div>
    );
  }
}

export default Cell;
