import React from "react";
import SearchBar from './SearchBar';
import DealDataTable from "./DealDataTable";
import SupperMenu from "./SupperMenu";

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

    GetUser = () => {
        let user = { name: "I'am a user" };
        return user;
    }

    render() {
      let user = this.GetUser();
      let deals = this.GetData();

      return (
        <>
          <SupperMenu user={user}/>
          <SearchBar/>
          <hr/>
          <DealDataTable deals={deals}/>
        </>
      );
    }
  }
  
  export default MainPage;