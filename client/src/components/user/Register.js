import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo1.png"

let Register = () => {
    return (
        <Fragment>
         <div className="container mt-3">
             <div className="row">
                 <div className="col-md-4 m-auto">
                    <div className="card">
                        <div className="card-head bg-brown text-white text-center">
                            <h3>Register here</h3>
                        </div>
                        <div className="card-body bg-light-brown">
                            <form action="">
                                <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name"/>
                              </div>
                              <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email"/>
                              </div>
                              <div className="form-group">
                                <input type="password" className="form-control" placeholder="password"/>
                              </div>
                              <div>
                                  <input type="submit" value="Create Account" className="btn btn-info btn-sm" />
                              </div>
                              <p className="text-white">Already Registered ?
                                <Link to="/login" className="text-cyan font-weight-bold"> Login</Link>
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

export default Register;