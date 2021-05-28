import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";

import Header from "./Navbar/Navbar";
import "../css/App.css";
import BHTable from "./BHTable/BHTable";
import BHSidepanel from "./BHSidepanel/BHSidepanel";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div style={{ marginLeft: "20px" }} className="flow-container-fluid">
          <div className="fill-height">
            <div>
              <h1 className="heading">Business Hours</h1>
              {/* <div style={{}}>{displayErrorMsg}</div> */}
              <div className="row">
                <div className="col-6">
                  <BHTable></BHTable>
                </div>
                <div className="col-6">
                  <BHSidepanel></BHSidepanel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
