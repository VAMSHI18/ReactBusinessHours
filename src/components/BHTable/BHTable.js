import React from "react";
import { connect } from "react-redux";

import AddNew from "../AddNew/AddNew";

import {
  selectedBH,
  fetchBusinessHours,
  deleteBusinessHour,
  saveNewBH,
  addBusinessHour,
} from "../../actions";

class BHTable extends React.Component {
  hours = [];
  addNew = null;
  newBusinessHour = {
    name: '',
    tags: []
  }

  state = {
    newName: "",
  };
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
  addBusinessHour = () => {
    this.props.addBusinessHour(this.state.newName);
    this.addNew = null;
    this.addNewButtons = null;
    this.setState({});
  };

  newBHNameHandler = (e) => {
    console.log(e.target.value);
    this.setState({ newName: e.target.value });
  };

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
        <td>
          <input
            onChange={(e) => this.newBHNameHandler(e)}
            className="form-control"
            name="bhName"
            type="text"
          />
        </td>
        <td>
          <input className="form-control" name="bhName" type="text" />
        </td>
      </tr>
    );
    
    this.addNewButtons = (
      <div className="form-group pull-right marginTop10">
        <button
          name="saveNew"
          className="btn btn-primary btn-sm marginRight2"
          onClick={this.addBusinessHour}
        >
          Save
        </button>
        <button className="btn btn-secondary btn-sm">Reset</button>
      </div>
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
                  <td>{}</td>
                  <td>{hr.lastmodified}</td>
                  <td>
                    {hr.action}
                    <button
                      className=" btn btn-danger delete-button"
                      name="delete"
                      onClick={() => this.props.deleteBusinessHour(hr)}
                    >
                      <i className="trash icon"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
            {this.addNew}
            {this.addNewButtons}
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
  selectedBH, fetchBusinessHours, deleteBusinessHour,addBusinessHour
})(BHTable);
