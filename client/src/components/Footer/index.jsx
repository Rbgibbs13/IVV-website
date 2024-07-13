import './style.css';

function Footer() {
    return (
        <footer className='footer-parent'>
            <div className='foot-div'>
                <ul>
                    <li>Email: <span>test@gmail.com</span></li>
                    <li>Phone: <span>(000) 000-0000</span></li>
                </ul>
            </div>
            <div className='foot-div' id='foot-break'></div>
            <div className='foot-div'>
                <h2 className='foot-title'><span style={{color: "white"}}>©2024 </span> IVV - International Vision Volunteers</h2>
            </div>
        </footer>
    );
}

export default Footer;