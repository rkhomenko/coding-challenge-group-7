import React from "react";
import DealDataRow from './DealDataRow';

class DealDataTable extends React.Component {
    render() {
      let rows = [];
      
      if (this.props.deals != null)
      {
        this.props.deals.forEach(deal => {
          rows.push(
            <DealDataRow deal={deal}/>
          );
        });
      }

      return (
        <table class="main_table">
          <thead>
            <tr class="table_header">
              <th>Instrument</th>
              <th>Conterparty</th>
              <th>Price</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody class="table_row">{rows}</tbody>
        </table>
      );
    }
  }
  
  export default DealDataTable;