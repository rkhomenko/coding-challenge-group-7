import React, {useState} from "react";
import axios from 'axios';

const LOGINURL = `http://localhost:4000/login`;

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
            <input
                class="form_input login"
                type="text" 
                placeholder="Login"
                value={username}
                onChange={event => handleUsernameChange(event.target.value)}
            />
            <br/>
            <input
                class="form_input password"
                type="text" 
                placeholder="Password"
                value={password}
                onChange={event => handlePasswordChange(event.target.value)}
            />
            <br/>
            <button
                class="form_input button"
                type="submit">
                Log In</button>
        </form>
    );

};

export default LoginBar;