import React, {useState} from "react";
import SearchBar from './SearchBar';
import DealDataTable from "./DealDataTable";
import ReportModal from '../ReportModal/ReportModal';

const MainPage = props => {
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

  
    return (
      <>
        <div><ReportModal/></div>

        <SearchBar/>
        <hr/>
        <DealDataTable deals={deals}/>
      </>
    );
}
  
export default MainPage;