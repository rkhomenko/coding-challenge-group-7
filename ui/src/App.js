import React, {useState} from 'react';
import LoginBar from './Components/LoginBar';

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

  return (isLogged ?  loggedForm : loginForm);
}

export default App;
