import './style.css';
import Navbar from '../Navbar';
import './style.css';

function Header() {
  return (
    <header className="header-parent">
      <h1 className='header-title'>IVV - International Vision Volunteers</h1>
      <Navbar></Navbar>
    </header>
  );
}

export default Header;
