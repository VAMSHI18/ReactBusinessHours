import React from "react";

const SaveButton = (props) => {
  return (
    <div>
      <button
        className={"ui primary button pull-right " + props.disabledClass}
        onClick={props.saveBHHandler}
      >
        <i className="save icon"> </i>Save
      </button>
      <button
        className={"ui button " + props.disabledClass}
        onClick={props.resetHandler}
      >
        Reset
      </button>
    </div>
  );
};

export default SaveButton;
