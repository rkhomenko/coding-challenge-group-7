import React from "react";


  class SearchBar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {filterType: 'instrument'};
      this.state = {NameType: 'Name'};
    }

    handleFilterTypeChanged = (event) => {
      this.setState({filterType: event.target.value});
    }

    handleFilterTextChanged = (event) => {
      this.setState({filterText: event.target.value});
    }

    handleSearchClick = () => {
      alert(this.state.filterType);
    }

    handleNameTypeChanged = (event) => {
          this.setState({NameType: event.target.value});
    }

    handleNameTextChanged = (event) => {
          this.setState({NameText: event.target.value});
      }


    render() {
      return (
        <>
          <div class="search_bar">
            <p class="search_bar_instrustion">If you need to see specific information, please use filters below</p>
            <div class="select_row">
                <select class="select_row_item" value={this.state.filterType} onChange={this.handleFilterTypeChanged}>
                  <option value='instrument'>Instrument name</option>
                  <option value='conterparty'>Conterparty</option>
                  <option value='price'>Price</option>
                </select>
                <button class="select_row_item"> Get aggregated report</button>
                <select class="select_row_item" value={this.state.NameType} onChange={this.handleNameTypeChanged}>
                    <option value='Name'>Name</option>
                    <option value='John'>John</option>
                    <option value='Lina'>Lina</option>
                    <option value='Andrew'>Andrew</option>
                </select>
            </div>
          </div>
       </>
      );
    }
  }
  
  export default SearchBar;