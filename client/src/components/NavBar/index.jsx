import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './style.css';

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

                        <div className="nav-element nav-hover" style={linkStyle}>
                          <Link to="/" onClick={() => Auth.logout()}>Logout</Link>
                          <div id="drop-signup" className="drop-menu" style={linkStyle}>
                              <Link to="/signup">Sign-Up</Link>
                          </div>
                        </div>
                        
                        <div className="nav-element" style={linkStyle}>
                          <Link id="profile-nav" to="/profile">Profile</Link>
                        </div>

                        <div className="nav-element" style={linkStyle}>
                          <Link id="profile-nav" to="/about">Mission</Link>
                        </div>
                        
                        <div className="nav-element" style={linkStyle}>
                          <Link to="/shop">Shop</Link>
                        </div>

                        <div className="nav-element" style={linkStyle}>
                          <Link id="profile-nav" to="/donors">Donors</Link>
                        </div>

                        <div className="nav-element nav-hover" style={linkStyle}>
                          <Link to="/cart">Cart</Link>
                        </div>
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
        
                    <div className="nav-element" >
                        <Link id="profile-nav" to="/donors">Donors</Link>
                    </div>
                    
                    <div className="nav-element" >
                      <Link to="/shop">Shop<span role="img" aria-label="shopping bag"> 🛍️</span></Link>
                    </div>
        
                    <div className="nav-element nav-hover" >
                      <Link to="/login">Login</Link>
                      <div id="drop-signup" className="drop-menu" >
                        <Link to="/signup">Sign-Up</Link>
                      </div>
                    </div>
        
                    <div className="nav-element nav-hover" >
                      <Link to="/checkout">🛒</Link>
                      {/* <div id="drop-cart" className="drop-menu">
                        <Link to="/order">Order History</Link>
                        <Link to="/cart">Check Out</Link>
                      </div> */}
                    </div>
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