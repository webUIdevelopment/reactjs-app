import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      domain: ''
    }
  }

  onHandleDomainChange(event) {
    this.props.domainlinkDetails.domain = event.target.value;
    this.setState({
      domain: event.target.value
    });
  }
  onHandleEmailChange(event) {
    this.props.domainlinkDetails.registrant_email = event.target.value;
    this.setState({
      domain: event.target.value
    });
  }
  onHandlePriceChange(event) {
    this.props.domainlinkDetails.price = event.target.value;
    this.setState({
      domain: event.target.value
    });
  }
  render() {
    return(
      <div>
        <hr/>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">Domain Name</label>
            <div className="col-sm-10">
              <input className="form-control" id="inputEmail3" placeholder="Domain" onChange={(event) => this.onHandleDomainChange(event)} value={this.props.domainlinkDetails.domain}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Registran Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" onChange={(event) => this.onHandleEmailChange(event)} value={this.props.domainlinkDetails.registrant_email}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Price</label>
            <div className="col-sm-10">
              <input className="form-control" id="inputPassword3" placeholder="Price" onChange={(event) => this.onHandlePriceChange(event)} value={this.props.domainlinkDetails.price}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
