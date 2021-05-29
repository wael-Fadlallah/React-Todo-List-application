import React from "react";

class TodoPanel extends React.Component {
  render() {
    return (
      <div className="item">
        <input
          type="checkbox"
          checked={this.props.checked}
          onClick={(e) => this.props.checkItem(this.props.index, e)}
          onChange={(e) => this.props.checkItem(this.props.index, e)}
        />
        <p>{this.props.todo}</p>
      </div>
    );
  }
}

export default TodoPanel;
