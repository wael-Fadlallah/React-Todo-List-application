import React from "react";

class TodoPanel extends React.Component {
  render() {
    return (
      <div className="item">
        <span
          id="span"
          onClick={(e) => this.props.checkItem(this.props.index, e)}
        >
          <input
            type="checkbox"
            checked={this.props.checked}
            onChange={(e) => this.props.checkItem(this.props.index, e)}
          />
        </span>
        <p>{this.props.todo}</p>
        <button onClick={(e) => this.props.deleteItem(this.props.index)}>
          ❌{" "}
        </button>
      </div>
    );
  }
}

export default TodoPanel;
