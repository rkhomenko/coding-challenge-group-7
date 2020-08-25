import React, {useState} from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import SearchBar from './Components/MainPage/MainPage'
import './App.css';
import './Components/MainPage/DaelDataTable.css';
import './Components/MainPage/SearchBar.css';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const loginHandler = isLog => {
    setIsLogged(isLog);
  };

  const loginPage = (
    <LoginPage
      loginHandler={loginHandler}
    />
  );
  const loggedForm = (
    <SearchBar/>
  );

  return (
    <>
    { isLogged ?  loggedForm : loginPage }
    
    <SearchBar/>
    </>
    );
}

export default App;
