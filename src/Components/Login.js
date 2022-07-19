import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);


  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("jmj1234")
      .replace(/"/g, "");
    let mail = localStorage.getItem("jithin").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);

    } else if (passwordlog !== pass || emaillog !== mail) {


      setFlag(true);
      
    } else {
      setHome(!home);
      setFlag(false);

    }

  }





 


  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3 className="registerhead">LogIn</h3>

          <br></br>

           {/* email */}
           <div className="form-group">
              <table className="container">
                <tr>
                  <td className="heading">Email</td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={(event) => setEmaillog(event.target.value)}/>
                      </td>
                </tr>
              </table>
            </div>
         
          <br></br>
           {/* paassword*/}
           <div className="form-group">
              <table className="container">
                <tr>
                  <td className="heading">Password</td>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={(event) => setPasswordlog(event.target.value)}/>
                      </td>
                </tr>
              </table>
            </div>

            <br></br>
            <br></br>
         

          <button type="submit" className="btn btnLog">
            Login
          </button>
        

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) 
      
      :
      
      (
        <Home/>
      )}


    </div>
  );
}

export default Login;
