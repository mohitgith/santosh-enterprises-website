import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import '../styles/Buttons.css'
import Login from '../pages/Login';

const Navbar = () => {
    return(
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={require('../logo-color.png')}  alt="" width="30" height="30" />
                        <span className='px-2'>Santosh Enterprises</span>
                        </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Shop</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Service
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/service/usha">Usha</Link></li>
                            {/* <li><Link className="dropdown-item" to="/">Lazer</Link></li> */}
                            {/* <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to="/">Something else here</Link></li> */}
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/product/usha">Usha</Link></li>
                            {/* <li><Link className="dropdown-item" to="/">Lazer</Link></li> */}
                        </ul>
                        </li>
                    </ul>
                        <Link className="btn btn-outline-light" aria-current="page" to="/login"  data-bs-toggle="modal" data-bs-target="#login-modal">Login</Link>
                        <Login/>
                    </div>
                </div>
                </nav>
    );
}

export default Navbar;