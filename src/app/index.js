import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Table } from "./components/Header";
import { TableRow } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      domainLink: "Initial Domain link"
    };
  }
  onGetDomainLinkApp(newName) {
    this.setState({
      domainLink: newName
    });
  }

  render() {

var domains = [{
        "id": 1,
        "domain": "foodfighters.lol",
        "price": 1200
    }, {
        "id": 2,
        "domain": "greendiamondsky.com",
        "price": 900
    }, {
        "id": 3,
        "domain": "selfdriving.cars",
        "price": 1600
    }];
var domainDetails = {
foodfighters : {
  "id": 2,
  "domain": "foodfighters.lol",
  "price": 1200,
  "registrant_email": "john.smith@email.com"
},
greendiamondsky : {
  "id": 2,
  "domain": "greendiamondsky.com",
  "price": 900,
  "registrant_email": "admin@dealdomainer.com"
},
selfdriving : {
  "id": 2,
  "domain": "selfdriving.cars",
  "price": 1600,
  "registrant_email": "carl.sagan@aimotors.com"
}
}

    return (
      <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Table
                domainData ={domains}
                domainDetails ={domainDetails}
                getDomainLinkApp={this.onGetDomainLinkApp.bind(this)}
                intitialDomainName={this.state.domainLink}
              ></Table>
            </div>
          </div>
          <div className="row rjs-form">
            <div className="col-xs-10 col-xs-offset-1">
              <Home
                domainlinkDetails ={this.state.domainLink}
              >
              </Home>
            </div>
          </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
