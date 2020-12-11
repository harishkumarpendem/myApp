import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import logo1 from '../images/logo1.png'

let Navbar = () => {
    return (
        <Fragment>
         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
             <div className="container-fluid">
                <Link to = "/" className='navbar-brand'>
                    <img src = {logo1} alt = 'nothing' width = "140" height = '45' />
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className= 'navbar-nav'>
                        <li className= 'navbar-item'>
                            <Link to = "/men" className='nav-link'>Men's Wear</Link>
                        </li>
                        <li className= 'navbar-item'>
                            <Link to = "/kid" className='nav-link'>Kid's Wear</Link>
                        </li>
                         <li className= 'navbar-item'>
                            <Link to = "/women" className='nav-link'>Women's Wear</Link>
                        </li>
                        <li className= 'navbar-item'>
                            <Link to = "/upload" className='nav-link'>upload</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className= 'navbar-item'>
                            <Link to = "/login" className='nav-link'>Login</Link>
                        </li>
                        <li className= 'navbar-item'>
                            <Link to = "/register" className='nav-link'>Register</Link>
                        </li>
                    </ul>
                </div>
             </div>
         </nav>
        </Fragment>
    );
};

export default Navbar;
