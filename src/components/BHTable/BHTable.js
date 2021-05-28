import React from "react";
import { connect } from "react-redux";

import AddNew from "../AddNew/AddNew";

import {
  selectedBH,
  fetchBusinessHours,
  deleteBusinessHour,
  saveNewBH,
} from "../../actions";
import { concat } from "lodash";

class BHTable extends React.Component {
  hours = [];
  addNew = null;
  newBusinessHour = {
    name: '',
    tags: []
  }

  //find the selectedRow using this.props.selectBH

  componentDidMount() {
    this.props.fetchBusinessHours();
    this.hours = this.props.bhHours;
  }

  //delete businesshoours method.
  deleteHandler = (index) => {
    // console.log('index');
    // console.log(index);
  };

  inputBHNameHandler = (event) => {
    //console.log(event.target.value);
    this.newBusinessHour.name = event.target.value;
  };

  componentDidUpdate() {
    this.addNew = null;
  }

  addNewBusinessHour = () => {
    console.log("button clicked!!!");
    this.addNew = (
      <tr>
        <td className="ui input">
          <input
            name="bhName"
            type="text"
            placeholder="Name"
            onChange={this.inputBHNameHandler}
          />
          <div className="margin-top-10">
            <button
              className="tiny ui button primary "
              onClick={() =>
                this.props.saveNewBH(
                  this.props.bhHours,
                  this.newBusinessHour.name
                )
              }
            >
              Save
            </button>
            <button className="tiny ui button">Reset</button>
          </div>
        </td>
        <td className="ui input">
          <input name="tag" type="text" placeholder="Tag name" />
        </td>
      </tr>
    );
    this.setState({});
  };

  render() {
    return (
      <div>
        <AddNew addNewBusinessHour={this.addNewBusinessHour} />
        <table className="table table-default hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tags</th>
              <th>Last Modified</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.props.bhHours.map((hr, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => this.props.selectedBH(hr, index)}
                  className={
                    this.props.selectBH.bhIndex === index ? "tableSelected" : ""
                  }
                >
                  <td>{hr.name}</td>
                  <td>{hr.lastmodified}</td>
                  <td>{hr.lastmodified}</td>
                  <td>
                    {hr.action}
                    <button
                      className="form-control btn btn-danger delete-button"
                      name="delete"
                      onClick={() => this.props.deleteBusinessHour(hr)}
                    >
                      <i className="trash icon"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
            {/* <tr> 
              <td>Hello</td>
            </tr> */}
            {this.addNew}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('state: ' + JSON.stringify(state));
  return {
    bhHours: state.hours,
    selectBH: state.selectBH,
    deleteBH: state.deleteBH,
  };
};

export default connect(mapStateToProps, {
  selectedBH,
  fetchBusinessHours,
  deleteBusinessHour,
  saveNewBH,
})(BHTable);
