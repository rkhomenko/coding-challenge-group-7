import React from "react";

  class DealDataRow extends React.Component {
    render() {
      return (
        <tr>
          <td>{this.props.deal.instrument}</td>
          <td>{this.props.deal.ctpy}</td>
          <td>{this.props.deal.price}</td>
          <td>{this.props.deal.time.toString()}</td>
        </tr>
      );
    }
  }
  
  export default DealDataRow;