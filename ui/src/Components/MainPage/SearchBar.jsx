import React from "react";


  class SearchBar extends React.Component {
    constructor(props) {
      super(props);

      this.state = {filterType: 'instrument'};
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

    render() {
      return (
        <>  
          <div>  
            <div>
              <p>If you need to see specific information, please use filters below</p>     
            </div>
            <div>
              <div>
                 <select value={this.state.filterType} onChange={this.handleFilterTypeChanged}>
                  <option value='instrument'>Instrument name</option>
                  <option value='conterparty'>Conterparty</option>
                  <option value='price'>Price</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <input type="text" value={this.state.filterText} onChange={this.handleFilterTextChanged} placeholder='Enter the search filter'/>
            <input type="submit" value="Search" onClick={this.handleSearchClick}/>
          </div>
        </>
      );
    }
  }
  
  export default SearchBar;