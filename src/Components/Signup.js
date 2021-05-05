import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Components/SignUp.css'

const LoginForm = () => {

 

  const nnobj = {

    name: "",

    email: "",

    phone: "",

    password: "",

  };
  
  const [Inpp, SetInputs] = useState(nnobj);
 
  const [error, setError] = useState(nnobj);

  const emvali = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

  const Errorr = () => {

    let errr = {};

 
    if (Inpp.email === "") {

      errr.emailErr = "Enter Email";

    } else if (!emvali.test(Inpp.email)) {

      errr.emailErr = "Enter Valid Email";

    } else {

      errr.emailErr = "";

    }

    if (Inpp.password === "") {

      errr.passErr = "Enter Password";

    } else if (Inpp.password.length < 8) {

      errr.passErr = "Password must be greater then 8 character";

    } else {

      errr.passErr = "";

    }

    if (Inpp.name === "") {

      errr.nameErr = "Enter Username";

    } else if (Inpp.name.length < 4) {

      errr.name = "Username must be greater then 4 character";

    } else {

      errr.nameErr = "";

    }
  
    if (Inpp.phone === "") {

      errr.phoneErr = "Enter Phone";

    } else if (!Inpp.phone.length == 10) {

      errr.phoneErr = "Phone must have 10 digit";

    } else {

      errr.phoneErr = "";

    }

    setError(errr);

  };


  let AllInputs = (e) => {
   
    const { value, name } = e.target;
    
    if (name === "email") {
     
      SetInputs((olddata) => ({...olddata,[name]: value,}));

    } else if (name === "password") {

      SetInputs((olddata) => ({...olddata,[name]: value,}));

    } else if (name === "name") {

      SetInputs((olddata) => ({...olddata, [name]: value,}));

    } else if (name === "phone") {

      SetInputs((olddata) => ({...olddata,[name]: value,}));

    }

    Errorr();

  };


  let Submit = (e) => {

    e.preventDefault();

    if (Inpp.email === "" || Inpp.password === "" || !emvali.test(Inpp.email) || Inpp.password.length < 8 || Inpp.name === "" || Inpp.phone === "" || Inpp.name.length < 4 || Inpp.phone.length != 10) {
      
      Errorr();

      alert("if part");

    } else {

      setError("");

      console.log("Imptsssssssssss", Inpp);

      alert("startup");

      axios.post("http://localhost:5000/apis/register", {

          name: Inpp.name,

          email: Inpp.email,

          phone: Inpp.phone,

          password: Inpp.password,

        })

        .then((response) => {

          console.log("All responsed data: ", response);

          SetInputs(nnobj);

        })

        .catch((err) => {

          alert("Error" + err.message);

          SetInputs(nnobj);

        });

    }

  };

  return (
    <>
    <div className ="forms">

            <h1>Welcome To Sign Up Page</h1>

            <form className="w-100">

              <div className="form-group">

                <label htmlFor="name">Username</label>

                <input id ="input"  type="text" className="form-control" name="name" placeholder="Enter the  username" onChange={AllInputs} autoComplete="off" value={Inpp.name} />
               
                <small className="text-danger">{error.nameErr}</small>
              
              </div>

              <div className="form-group">

                <label htmlFor="name">Email Address</label>

                <input  id ="input"  type="email"  className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter the  email"  onChange={AllInputs}  autoComplete="off" value={Inpp.email} />
              
                <small className="text-danger">{error.emailErr}</small>
             
              </div>
         
              <div className="form-group">

                <label htmlFor="email">Phone</label>

                <input  id ="input" type="number"  className="form-control" name="phone"  placeholder="Enter the  phone" onChange={AllInputs}  autoComplete="off"  value={Inpp.phone}  />
               
                <small className="text-danger">{error.phoneErr}</small>
             
              </div>
   
              <div className="form-group">

                <label htmlFor="pass">Password</label>

                <input  id ="input"  type="password"  className="form-control" name="password"  placeholder="Enter the password"  onChange={AllInputs} autoComplete="off" value={Inpp.password} />
               
                <small className="text-danger">{error.passErr}</small>
             
              </div>
             
              <div className="form-group">

                <input id ="input" type="submit"  className="form-control"  value="Sign Up"  className="btn btn-primary btn-block"  onClick={Submit}  />
            
            </div>

              <div className="form-group text-center">

                <small className="text-muted"> Already user{" "}

                  <Link to="/Login">

                    <span className="button text-primary">Click Me</span>
                  
                  </Link>
               
                </small>
             
             </div>
           
            </form>
       
            </div>
    </>
  );
};

export default LoginForm;
