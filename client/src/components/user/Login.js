import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo1.png"

let Login = () => {
    return (
        <Fragment>
         <div className="container mt-3">
             <div className="row">
                 <div className="col-md-4 m-auto">
                    <div className="card">
                        <div className="card-head bg-info text-white text-center">
                            <h3>Login here</h3>
                        </div>
                        <div className="card-body bg-light">
                            <form action="">
                              <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email"/>
                              </div>
                              <div className="form-group">
                                <input type="password" className="form-control" placeholder="password"/>
                              </div>
                              <div>
                                  <input type="submit" value="Loin" className="btn btn-info btn-sm" />
                                  <input type="submit" value="forgot password" className="btn btn-cyan btn-sm" />
                              </div>
                              <p className="text-wite">Don't have an Account ?
                                <Link to="/register" className="text-cyan font-weight-bold"> Register</Link>
                              </p>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <img src={logo} alt="" width="150" height="40" />
                        </div>
                    </div>
                 </div>
             </div>
         </div>
        </Fragment>
    );
};

export default Login;