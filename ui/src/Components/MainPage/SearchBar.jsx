import React from "react";
import ReportModal from '../ReportModal/ReportModal'


  class SearchBar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {filterType: 0};
      this.state = {dealer: 0};
    }

    handleFilterTypeChanged = (event) => {
      this.setState({filterType: event.target.value});
    }

    handleDealerChanged = (event) => {
          this.setState({dealer: event.target.value});
    }


    render() {
      // axios request for them
      let dealers = [
        {name: "Anna", surname: "Agapova"},
        {name: "Ivan", surname: "Ivanov"}
      ];

      let rows = dealers.map((dealer, i) => (
              <option value={i}>{dealer.name} {dealer.surname}</option>
      ));

      // axios request for them
      let instruments = [
        {name: "Instrument name"},
        {name: "Conterparty"},
        {name: "Conterparty"}
      ];

      let rows2 = instruments.map((instrument, i) => (
              <option value={i}>{instrument.name}</option>
      ));

      return (

        <>
          <div class="search_bar">
            <p class="search_bar_instrustion">If you need to see specific information, please use filters below</p>
            <div class="select_row">
                <select class="select_row_item" 
                  value={this.state.filterType} 
                  onChange={this.handleFilterTypeChanged}
                >
                  {rows2}
                </select>
                <ReportModal
                  dealer={this.state.dealer}
                  instrument={this.state.filterType}
                />
                <select class="select_row_item" 
                  value={this.state.dealer} 
                  onChange={this.handleDealerChanged}
                  >
                    {rows}
                </select>
            </div>
          </div>
       </>
      );
    }
  }
  
  export default SearchBar;