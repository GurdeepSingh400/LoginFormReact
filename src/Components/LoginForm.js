import React, { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../Components/Loginform.css'
import Home from '../Components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const LoginForm = () => {

  const [newlogin, setLogin] = useState(newobj);
 
  const [err, setErr] = useState(newobj);


  const newobj = {

    email: "",

    password: "",

  };
 

  let evali = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let checkError = () => {

    let erob = {};

    if (newlogin.email === "") {

      erob.emailErr = " Enter email";

    } else if (!evali.test(newlogin.email)) {

      erob.emailErr = "Enter a valid email";

    } else {

      erob.emailErr = "";

    }
    if (newlogin.password === "") {

      erob.passwordErr = "Enter password";

    } else if (newlogin.password.length < 8) {

      erob.passwordErr = "Password must have 8 character";
      
    } else {

      erob.passwordErr = "";

    }

    setErr(erob);

  };

  let loginCheck = (e) => {

    const { value, name } = e.target;

    setLogin((oldstate) => ({...oldstate,[name]: value,}));

    checkError();

  };

   let checkLogin = (e) => {

     if(newlogin.email,

      newlogin.password){

        // alert("lo-gin sucessfully")

        <Router>
        <Switch>
          <Route path="/Home" component={Home} />
        </Switch>
      </Router>

     }
     
    e.preventDefault();

    if (

      !err.email == "" ||

      !err.password == "" ||

      newlogin.email == "" ||

      newlogin.password.length < 8 ||

      !evali.test(newlogin.email)

    ) {
      alert("Enter  filed properly");

      console.log("ERR", err);

      checkError();

    } else {

      setErr("");

      axios.post("http://localhost:5000/apis/login", { 

          email: newlogin.email,

          password: newlogin.password,

        })

        .then((response) => {

          console.log("response: ", response);

          setLogin(newobj);

        })

        .catch((err) => {

          alert("Error" + err.message);

          setLogin(newobj);

        });

    }

  };

  return (
    <>
      <div>

            <h2>Login</h2>

            <form className="forms">
        
              <div className="form-group">

                <label htmlFor="name">Email address</label>

                <input id ="input" type="email" className="form-control"  name="email" aria-describedby="emailHelp"  placeholder="Enter email" onChange={loginCheck} autoComplete="off" value={newlogin.email}/>

                <small className="text-danger">{err.emailErr}</small>

              </div>

              <div className="form-group">

                <label htmlFor="pass">Password</label>

                <input
                   id ="input" type="password" className="form-control" name="password" placeholder="Password" onChange={loginCheck} autoComplete="off" value={newlogin.password}/>

                <small className="text-danger">{err.passwordErr}</small>
             
              </div>

              <div className="form-group">

                <input  id ="input"  type="submit" className="form-control"  value="Login In" className="btn btn-primary btn-block" onClick={checkLogin} />
              
              </div>

              <div className="form-group text-center">

                <small className="text-muted"> Sign Up {" "}
                
                 <Link to="/"> <span className="text-primary button">Click Me</span> </Link>

                </small>

              </div>

            </form>

          </div>
         
    
    </>
  );
};

export default LoginForm;
