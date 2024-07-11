import Navbar from '../Navbar';
import flag from '../../assets/zambia-flag.jpg';
import './style.css';

function Header() {
  return (
    <header className="header-parent">
      <div className='header'>
        <h1 className='header-title'>IVV - International Vision Volunteers</h1>
      </div>
      <Navbar></Navbar>
      <div className='header-image-container'>
        <img className='header-image' src={flag}></img>
      </div>
    </header>
  );
}

export default Header;
