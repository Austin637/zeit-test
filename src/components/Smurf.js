import React from "react";

const Smurf = props => {
  return (
    <div>
      <div className="Smurf">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
