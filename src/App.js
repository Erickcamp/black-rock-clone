import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isMobileMenuOpen: false,
    };
  }

  toggleMobileMenu = () => {
    this.setState({
      isMobileMenuOpen: !this.state.isMobileMenuOpen,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="Charlene-said-so">
            <div className="logo-area">
              <img
                className="start"
                src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
                alt="start bootstrap"
              />
            </div>
            <RegularNav />
            <MobileNav
              open={this.state.isMobileMenuOpen}
              onClick={this.toggleMobileMenu}
            />
          </div>
          {this.state.isMobileMenuOpen && (
            <ul className="white">
              <li className="mobile-nav-list-item">Services</li>
              <li className="mobile-nav-list-item">Portfolio</li>
              <li className="mobile-nav-list-item">About</li>
              <li className="mobile-nav-list-item">Team</li>
              <li className="mobile-nav-list-item">Contact</li>
            </ul>
          )}
          <div className="welcome">
            <h1>
              <span className="welcome-text">Welcome To Our Studio!</span>
              <br />
              <span className="greeting-text">IT'S NICE TO MEET YOU</span>
              <br />
            </h1>
            <a className="more-text" href="more">
              TELL ME MORE
            </a>
          </div>
        </header>
      </div>
    );
  }
}

const MobileNav = ({ open, onClick }) => {
  return (
    <nav className="mobile-nav">
      <p className="menu" onClick={onClick}>
        Menu
      </p>
    </nav>
  );
};

const RegularNav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <a href="link">Services</a>
      </li>
      <li className="nav-list-item">
        <a href="link">Portfolio</a>
      </li>
      <li className="nav-list-item">
        <a href="link">About</a>
      </li>
      <li className="nav-list-item">
        <a href="link">Team</a>
      </li>
      <li className="nav-list-item">
        <a href="link">Contact</a>
      </li>
    </ul>
  </nav>
);
