import { useNavigate } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Home = () => {
    let navigate = useNavigate();
    const routeChange = (input) => { 
        console.log(input);
        let path = `/${input}`;
        navigate(path);
    };

    return (
        <div className="parallax-group" >
            <h1 className="splash-title parallax-header">Parallax Test</h1>
            <h2 className="splash-title parallax-sub-header">Sub Title Here</h2>
        </div>
    )
}

export default Home;