import React, {useState} from "react";
import axios, {AxiosError, AxiosResponse} from 'axios';

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
            await axios.post(LOGINURL, cred)
                .then((response) => {
                    console.log(response.data);
                    console.log(response.status);
                })
        } catch (e) {
            console.log(e);
            props.loginHandler(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                class="login"
                type="text" 
                placeholder="Login"
                value={username}
                onChange={event => handleUsernameChange(event.target.value)}
            />
            <br/>
            <input
                class="password"
                type="text" 
                placeholder="Password"
                value={password}
                onChange={event => handlePasswordChange(event.target.value)}
            />
            <br/>
            <button
                class="button"
                type="submit">
                Log In</button>
        </form>
    );

};

export default LoginBar;