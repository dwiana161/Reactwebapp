import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import UserList from "../List/List";

const Login = () => {
    const navigate = useNavigate();

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "user1",
            password: "user1",
        },
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        let { uname, pass } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
    
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
            navigate('users')
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
      };
    
      // Generate JSX code for error message
      const renderErrorMessage = (name) =>
        name === errorMessages.name && (
          <div className="error">{errorMessages.message}</div>
        );
    
      // JSX code for login form
      const renderForm = (
    <>
        <Form>
            <Form.Field>
            <label>Username</label>
            <input type="text" name="uname" required placeholder='username' />
            {renderErrorMessage("uname")}
            </Form.Field>
            <Form.Field>
            <label>Password</label>
            <input type="password" name="pass" required placeholder='Last Name' />
            {renderErrorMessage("pass")}
            </Form.Field>
            <Form.Field>
            </Form.Field>
            <Button type='submit' onClick={handleSubmit}>Submit</Button>
        </Form>
        </>
      );
    
      return (
        <div className="app">
          <div className="login-form">
            <div className="title">Sign In</div>
            {isSubmitted ? <Link to='/users'></Link> : renderForm}
          </div>
        </div>
      );
}

export default Login;