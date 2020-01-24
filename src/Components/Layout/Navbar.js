import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from './../../images/navLogo.png';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark">
        <Link class="navbar-brand" to="/">
          <img src={navLogo} alt="Nav Bar Logo" className="d-line-block align-top" style={{ width: '100px', height: '100px' }} />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>
          <ul class="navbar-nav text-uppercase">
            <li class="nav-item">
              <Link to="/" className="nav-link">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/Player/LeaderBoard" className="nav-link">Leaderboard</Link>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
