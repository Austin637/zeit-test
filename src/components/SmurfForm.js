import React, { Component } from "react";

class SmurfForm extends Component {
  decideForm = e => {
    e.preventDefault();
    if (this.props.update) {
      this.props.updateSmurfInfo();
    } else {
      this.props.addSmurf();
    }
  };
  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.decideForm}>
          <input
            onChange={this.props.handleInputChange}
            placeholder="name"
            value={this.props.smurf.name}
            name="name"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="age"
            value={this.props.smurf.age}
            name="age"
          />
          <input
            onChange={this.props.handleInputChange}
            placeholder="height"
            value={this.props.smurf.height}
            name="height"
          />
          <button type="submit">
            {this.props.update ? "Update Smurf" : "Add to the village"}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
