import React, {useState} from "react";
import axios from 'axios';

const LOGINURL = `http://localhost:5000/api/users`;

const LoginBar = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = changedUsername => {
        setUsername(changedUsername);
    };
    const handlePasswordChange = changedPassword => {
        setPassword(changedPassword);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        let cred = {username: username, password: password};
        try {
            const res = await axios.post(LOGINURL, cred);
            const suc = await res.data;
            props.loginHandler(suc === true);
          } catch (e) {
            props.loginHandler(false);
          }
    };

    return (
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

};

export default LoginBar;