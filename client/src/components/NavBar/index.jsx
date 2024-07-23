import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './style.css';

import flag from '../../assets/zambia-flag.jpg';
// 🛍️

export default function Nav() {
    // const linkStyle = { border: '1px black', padding: '5px' };
    function showNavigation() {
        if(Auth.loggedIn()) {
            return (
                <nav className="main-header-menu">
                    <section className="navbar-section">
                        <div className="nav-element" style={linkStyle}>
                          <Link to="/">Home</Link>
                        </div>
                        
                        <div className="nav-element" style={linkStyle}>
                          <Link id="profile-nav" to="/profile">Profile</Link>
                        </div>

                        <div className="nav-element" style={linkStyle}>
                          <Link id="profile-nav" to="/about">Mission</Link>
                        </div>

                        <div className="nav-element">
                          <Link to='/members'>Members</Link>
                        </div>

                        <div className="nav-element" style={linkStyle}>
                          <Link id="profile-nav" to="/donors">Donors</Link>
                        </div>

                        <div className="nav-element">
                          <Link to='/projects'>Projects</Link>
                        </div>
                        
                        <div className="nav-element" style={linkStyle}>
                          <Link to="/shop">Shop</Link>
                        </div>

                        <div className="nav-element nav-hover" style={linkStyle}>
                          <Link to="/" onClick={() => Auth.logout()}>Logout</Link>
                        </div>

                        {/* <div className="nav-element nav-hover" style={linkStyle}>
                          <Link to="/cart">Cart</Link>
                        </div> */}
                        
                    </section>
                </nav>
            );
        } else {
            return (
                <nav className="main-header-menu">
                  <section className="navbar-section">
                    <div className="nav-element" >
                      <Link to="/">Home</Link>
                    </div>

                    <div className="nav-element" >
                      <Link id="profile-nav" to="/about">Mission</Link>
                    </div>

                    <div className="nav-element">
                      <Link to='/members'>Members</Link>
                    </div>
        
                    <div className="nav-element" >
                      <Link to="/donors">Donors</Link>
                    </div>

                    <div className="nav-element">
                      <Link to='/projects'>Projects</Link>
                    </div>
                    
                    <div className="nav-element" >
                      <Link to="/shop">Shop<span role="img" aria-label="shopping bag"> </span></Link>
                    </div>
        
                    <div className="nav-element nav-hover" >
                      <Link to="/login">Login</Link>
                      {/* <div id="drop-signup" className="drop-menu" >
                        <Link to="/signup">Sign-Up</Link>
                      </div> */}
                    </div>
        
                    {/* <div className="nav-element nav-hover" >
                      <Link to="/checkout">🛒</Link>
                    </div> */}

                    {/* <div className="nav-element">
                      <img src={flag}></img>
                    </div> */}
                  </section>
                </nav>
              );
        }
    }

    return (
        <>
            {showNavigation()}
        </>
    )
}