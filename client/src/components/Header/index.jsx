import './style.css';
import Navbar from '../Navbar';

function Header() {
  return (
    <header className="header">
      <h1 className='header-title'>IVV - International Vision Volunteers</h1>
      <Navbar></Navbar>
    </header>
  );
}

export default Header;
