import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.intitialLinkName,
      domainName: ''
    }
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }
  onchangeLink() {
    this.props.changeLink(this.state.homeLink);
  }
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }
  onHandleDomainChange(event) {
    this.props.domainlinkDetails.domain = event.target.value;
    this.setState({
      domainName: event.target.value
    });
  }
  render() {
    var text = "something";
    return(
      <div>
        <p>In a new Component!</p>
        <p>{text}</p>
        <p>name {this.props.name}, your age is {this.state.age}</p>
        <div>
          <h4>hobbies</h4>
          <tr>
            {this.props.user.hobbies.map((hobby, i) => <td key={i}>{hobby}</td>)}
          </tr>
        </div>
        <hr/>
        {this.props.children}
        <hr/>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
        <hr/>
        <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
        <hr/>
        <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
        <button onClick={this.onchangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
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
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" onChange={(event) => this.onHandleDomainChange(event)} value={this.props.domainlinkDetails.registrant_email}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Price</label>
            <div className="col-sm-10">
              <input className="form-control" id="inputPassword3" placeholder="Price" onChange={(event) => this.onHandleDomainChange(event)} value={this.props.domainlinkDetails.price}/>
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
