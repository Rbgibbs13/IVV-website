import "./style.css";
import cherry from "../../assets/cherry-blossom.jpg";
import zimba from '../../assets/IMG_3197.jpg';
import { useState, useEffect } from "react";

function Jumbotron({ children }) {
    const duration = 1000;
    const [titleStyle, setStyle] = useState({
        color: 'white',
        opacity: 0,
        top: '60%',
    });

    const [altStyle, setSecond] = useState({
        opacity: 0,
        top: '60%',
    });

    const firstStyle = {
        color: titleStyle.color,
        top: titleStyle.top,
        opacity: titleStyle.opacity,
        transition: 'all 2s ease',
    };

    const textSecond = {
        top: altStyle.top,
        opacity: altStyle.opacity,
        transition: 'all 2s ease',
    };

    useEffect(() => {
        setTimeout(() => {
            secondTimer();
            setStyle({
                color: `var(--color-orange)`,
                opacity: 1,
                top: 'max(40%, 180px)',
            });
        }, duration);
    }, '');
    
    const secondTimer = () => {
        setTimeout(() => {
            setSecond({
                opacity: 1,
                top: 'max(45%, 220px)',
            });
        }, duration*2);
    };

    return (
        <div className="jumbotron" style={{ backgroundImage: `url(${zimba})`}}>
            {children}
            <h2 className="jumbo-title title-main" style={firstStyle}>Welcome to IVV!</h2>
            <h2 className="jumbo-title title-alt" style={textSecond}>Please Donate Today!</h2>
        </div>
    );
};

export default Jumbotron;