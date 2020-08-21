import React, {useState, useEffect} from "react";
import axios from 'axios';

const LOGINURL = `http://localhost:4000/login`;

const LoginBar = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    const handleUsernameChange = changedUsername => {
        setUsername(changedUsername);
    };
    const handlePasswordChange = changedPassword => {
        setPassword(changedPassword);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        let cred = {username, password};
        try {
            const res = await axios.post(LOGINURL, cred);
            const suc = await res.data;
            setIsLogged(suc === true);
          } catch (e) {
            setIsLogged(false);
          }
    };

    const loginForm = (
        <form onSubmit={handleSubmit}>
            Username:
            <input 
                type="text" 
                placeholder="username" 
                value={username}
                onChange={event => handleUsernameChange(event.target.value)}
            />
            Password:
            <input 
                type="text" 
                placeholder="password" 
                value={password}
                onChange={event => handlePasswordChange(event.target.value)}
            />
            <input type="submit" value="Submit"/>
        </form>
    );
    const loggedForm = (
        <p>Logged</p>
    );

    return (isLogged ?  loggedForm : loginForm);
};

export default LoginBar;