import React, {useState} from "react";
import './Login.css';
import { useDispatch } from "react-redux";



const Login = () => 
{
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      Login({
        name, 
        email,
        password,
        loggedIn: true,
      })
    );
  };
    return (
        <div className = "login">
            <form className = "login__form" onSubmit = {(e) => handleSubmit(e)}>
                <h1>Login here</h1>
                <input
          type = "text"
          placeholder = "Name"
          value = {name}
          onChange = {(e) => setName(e.target.value)}
        />
        <input
          type = "email"
          placeholder = "Email"
          value = {email}
          onChange = {(e) => setEmail(e.target.value)}
        />
        <input
          type = "password"
          placeholder = "Password"
          value = {password}
          onChange = {(e) => setPassword(e.target.value)}
        />
        <button className = "submit__btn" type = "submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;