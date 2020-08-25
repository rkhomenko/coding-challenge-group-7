import React, {useState} from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import MainPage from './Components/MainPage/MainPage'
import './App.css';
import './Components/MainPage/DaelDataTable.css';

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
    <MainPage/>
  );

  return (
    <>
    { isLogged ?  loggedForm : loginPage }
    </>
    );
}

export default App;
