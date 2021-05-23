import React from "react";

class TodoPanel extends React.Component {
  render() {
    return (
      <div className="inbox">
        <div className="item">
          {/* checked={this.props.checked} */}
          <input type="checkbox" />
          <p>{this.props.todo}</p>
        </div>
      </div>
    );
  }
}

export default TodoPanel;
