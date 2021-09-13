import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";

import Header from "./Navbar/Navbar";
import "../css/App.css";
import BHSidepanel from "./BHSidepanel/BHSidepanel";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Applications from "./Applications/Applications";
import Modules from "./Modules/Modules";
import Businesshours from "./BusinessHours/BusinessHours";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header></Header>

        <div style={{ marginLeft: "20px" }} className="flow-container-fluid">
          <div className="fill-height">
            
              <Switch>
                <Route path="/applications" component={Applications}>
                  {/* <Applications></Applications> */}
                </Route>

                <Route path="/modules" component={Modules}>
                  {/* <Modules></Modules> */}
                </Route>

                <Route Route exact path = "/businesshours"
                component = {
                  Businesshours
                } >
                  {/* <Businesshours></Businesshours> */}
                </Route>
              </Switch>
            </div>
            </div>
            </BrowserRouter>
      </div>
    );
  }
}

export default App;
