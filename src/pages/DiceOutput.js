import React, {Component} from "react";

const DiceOutput = (props) => {
  return (
    <div id="output-box">
      <textarea value={props.value}>
        <p></p>
      </textarea>
      {/*<button id="roll" className="btn-small">Roll</button>*/}
      {/*<button id="clear" className="btn-small">Clear</button>*/}
    </div>
  );
};

export default DiceOutput;