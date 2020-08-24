import React, {useState} from 'react';
import LoginBar from './Components/LoginBar';
import MainPage from './Components/MainPage/MainPage';
import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const loginHandler = isLog => {
    setIsLogged(isLog);
  };

  const loginForm = (
    <LoginBar
      loginHandler={loginHandler}
    />
  );
  const loggedForm = (
    <MainPage/>
  );

  return (
    <>
    { isLogged ?  loggedForm : loginForm }
    <MainPage/>
    </>
    );
}

export default App;
