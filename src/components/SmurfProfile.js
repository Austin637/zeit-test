import React, { Component } from "react";
import axios from "axios";

class SmurfProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisSmurf: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getSingleSmurf(id);
  }

  getSingleSmurf = id => {
    axios.get(`${this.props.serverURL}`)
        .then(res => {
            this.setState({ thisSmurf: res.data.find(item => `${item.id}` === id)})
        })
        .catch(err => console.log(err));
  };

  render() {
    if (!this.state.thisSmurf) {
        return <p>Getting information</p>;
    }
    return (
      <div>
          <h2>{this.state.thisSmurf.name}</h2>
        <p>{this.state.thisSmurf.age} smurf years old</p>
        <p>{this.state.thisSmurf.height} tall</p>
        <button onClick={e => this.props.deleteSmurf(e, this.state.thisSmurf.id)}>
          Delete
        </button>
        <button
          onClick={e => this.props.showUpdateForm(e, this.state.thisSmurf.id)}
        >
          Update
        </button>
      </div>
    );
  }
}

export default SmurfProfile;
