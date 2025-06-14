import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" 
         style={{
           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
           padding: '0.8rem 1rem'
         }}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          ResumeCraft Pro
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/templates">Templates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/builder">Builder</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/examples">Examples</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3" to="/pricing">Pricing</Link>
            </li>
          </ul>
          <div className="ms-lg-3 mt-3 mt-lg-0">
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/signup" className="btn btn-light" style={{ color: '#667eea' }}>Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;