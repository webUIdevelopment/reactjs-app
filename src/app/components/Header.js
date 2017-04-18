import React from "react";

export class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Domain Name</th>
          <th>Uniregistry</th>
          <th>Price</th>
        </tr>
      </thead>
        <TableRow data={this.props} />
      </table>
    );
  }
}

export class TableRow extends React.Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     domainLink: props.intitialDomainName
  //   }
  // }
  getDomainLink(event) {
    // data.getDomainLinkApp(this.state.domainLink);
    // this.setState({
    //   domainLink: event.target.innerHTML
    // });

    var domain = event.target.innerHTML.split('.')[0],newName;
    if(domain == "foodfighters") {
      newName = this.props.data.domainDetails.foodfighters;
    } else if (domain == "greendiamondsky") {
      newName = this.props.data.domainDetails.greendiamondsky;
    } else {
      newName = this.props.data.domainDetails.selfdriving;
    }
    this.props.data.getDomainLinkApp(newName);
    // console.log(event.target.innerHTML);
    // console.log(this.props);
    // this.props.data.intitialDomainName = event.target.innerHTML;
  }

  render() {
    const {
      data
    } = this.props;
    const row = data.domainData.map((data) =>
    <tr>
      <td onClick={(event) => this.getDomainLink(event)} key={data.domain}><a>{data.domain}</a></td>
      <td key={data.id}>{data.id}</td>
      <td key={data.price}>{data.price}</td>
    </tr>
    );
    return (
      <tbody>{row}</tbody>
    );
  }
}
