import React, {useState} from 'react';
import LoginBar from './Components/LoginBar';
import MainPage from './Components/MainPage/MainPage';

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
    <p>Logged</p>
  );

  return (
    <>
    { isLogged ?  loggedForm : loginForm }
    <MainPage/>
    </>
    );
}

export default App;
