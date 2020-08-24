import React from "react";
import SearchBar from './SearchBar';
import DealDataTable from "./DealDataTable";

  class MainPage extends React.Component {    
    GetData = () => {
        let deals = [
          {
              instrument: "A",
              ctpy: "AA",
              price: 0,
              time: new Date('December 17, 1995 03:24:00')
          },      
          {
              instrument: "B",
              ctpy: "BB",
              price: 0,
              time: new Date('December 17, 1995 03:24:00')
          }      
        ];

        return deals;
    }

    render() {
      let deals = this.GetData();

      return (
        <>
          <SearchBar/>
          <hr/>
          <DealDataTable deals={deals}/>
        </>
      );
    }
  }
  
  export default MainPage;