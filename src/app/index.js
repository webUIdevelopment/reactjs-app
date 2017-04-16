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
      homeLink: "Home",
      domainLink: "Initial Domain link"
    };
  }
  onGreet() {
    alert("hello");
  }
  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }
  onGetDomainLinkApp(newName) {
    this.setState({
      domainLink: newName
    });
  }
  render() {
    var user = {
      name: "Anna",
      hobbies: ["Sports", "singing"]
    }

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
              <Header homeLink={this.state.homeLink}/>
              <Table
                domainData ={domains}
                domainDetails ={domainDetails}
                getDomainLinkApp={this.onGetDomainLinkApp.bind(this)}
                intitialDomainName={this.state.domainLink}
              ></Table>
            </div>
          </div>
          <p>hello World</p>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Home
                name={"Max"}
                initialAge={27}
                user={user}
                greet={this.onGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                intitialLinkName={this.state.homeLink}
                domainlinkDetails ={this.state.domainLink}
              >
                <p>This is a para</p>
              </Home>
            </div>
          </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
