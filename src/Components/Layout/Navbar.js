import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from './../../images/navLogo.png';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-md navbar-light text-uppercase navbar-dark mr-auto">
       <Link className="navbar-brand" to="/"><img src={navLogo} alt="Nav Bar Logo" className="d-line-block align-top" style={{ width: '120px', height: '120px' }} /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to="/Player/Leaderboard">Leaderboard</Link>
            <Link className="nav-item nav-link" to="/Player/Stats">User</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
