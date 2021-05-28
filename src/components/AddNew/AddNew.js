import React from "react";

const AddNew = (props) => {
  return (
    <div className="form-group">
      <button
        className="ui primary button marginBottom10"
        onClick={props.addNewBusinessHour}
      >
        <i className="plus icon"> </i>
        Add New
      </button>
    </div>
  );
};

export default AddNew;
