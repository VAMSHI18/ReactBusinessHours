import React from "react";
import { TimePicker } from "antd";
import moment from "moment";
import { connect } from "react-redux";

import SaveButton from "./SaveButton";
import {
  changeEndTimeHandler,
  changeClosedTimeHandler,
  saveBH,
  startTimeHandler,
  endTimeHandler,
  resetHandler
} from "../../actions";


class BHSidepanel extends React.Component {
  bhClickedName = {};
  hours = [];

  noEndTimeHandler = (event, index) => {
    console.log("index: ", index);
    this.props.changeEndTimeHandler(this.bhClickedName, index);
  };

  startTimeHandler = (index, time, timeString) => {
    this.props.startTimeHandler(this.bhClickedName, index, timeString);
  };

  endTimeHandler = (index, time, timeString) => {
    this.props.endTimeHandler(this.bhClickedName, index, timeString);
  };

  changeClosedTimeHandler = (event, index) => {
    this.props.changeClosedTimeHandler(this.bhClickedName, index);
  };

  saveBHHandler = (bhHours, bhClicked) => {
    console.log("inside bhsidepanel::: ");
    console.log(bhHours);
    this.props.saveBH(bhHours, bhClicked);
  };

  resetHandler = (bhHours, bhClicked) => {
    console.log('reset');
    this.props.resetHandler(bhHours, bhClicked);
  };

  render() {
    this.bhClickedName = this.props.selectBH.bhClicked
      ? this.props.selectBH.bhClicked
      : {};
    if (!this.bhClickedName.hours) {
      return <div>Please select business hours on the left</div>;
    }

    this.hours = this.props.hours;

    return (
      <div>
        <div className="form-group">
          <table className="table table-default">
            <thead>
              <tr>
                <td colSpan="5">
                  <h2 className="heading"> {this.bhClickedName.name} </h2>
                </td>
              </tr>
              <tr>
                <th> Day </th> <th> Start Time </th> <th> End Time </th>
                <th> No End Time </th> <th> Open All Day </th>
              </tr>
            </thead>
            <tbody>
              {this.bhClickedName.hours.map((day, index) => {
                return (
                  <tr key={index} className="pointer-cursor">
                    <td> {day.day} </td>
                    <td>
                      <TimePicker
                        value={moment(day.starttime, "h:mm A")}
                        onChange={this.startTimeHandler.bind(this, index)}
                        use12Hours
                        format="h:mm A"
                        bordered={false}
                        autoOk={true}
                      />
                    </td>
                    <td>
                      <TimePicker
                        value={moment(day.endtime, "h:mm A")}
                        onChange={this.endTimeHandler.bind(this, index)}
                        use12Hours
                        format="h:mm A"
                        bordered={false}
                        autoOk={true}
                      />
                    </td>
                    <td>
                      <input
                        onChange={(event) =>
                          this.noEndTimeHandler(event, index)
                        }
                        name="noend"
                        type="checkbox"
                        checked={day.noend}
                      ></input>
                    </td>
                    <td>
                      <input
                        onChange={(event) =>
                          this.changeClosedTimeHandler(event, index)
                        }
                        name="openAllDay"
                        type="checkbox"
                        checked={day.closed}
                      ></input>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <SaveButton
          saveBHHandler={() =>
            this.saveBHHandler(this.props.hours, this.bhClickedName)
          }
          resetHandler={() => this.resetHandler(this.props.hours, this.bhClickedName)}
        ></SaveButton>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  // console.log('state');
  //   console.log(state);
  return {
    selectBH: state.selectBH,
    hours: state.hours
  };
};

export default connect(mapStateToProps, {
  changeEndTimeHandler,
  saveBH,
  changeClosedTimeHandler,
  startTimeHandler,
  endTimeHandler,
  resetHandler
})(BHSidepanel);
