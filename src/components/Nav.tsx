import React from 'react';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
            <span className="sr-only">6</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Alients.mars</a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/">Venus</a></li>
            <li><a href="/">Mars</a></li>
            <li><a href="/">Proxima Centuri</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
