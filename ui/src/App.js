import React, {useState} from 'react';

import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import MainPage from './Components/MainPage/MainPage'

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
  const mainPage = (
    <MainPage/>
  );

  return (isLogged ?  mainPage : loginPage);
}

export default App;
