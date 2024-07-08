import { useNavigate } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from '../components/Header';

const Home = () => {
    let navigate = useNavigate();
    const routeChange = (input) => { 
        console.log(input);
        let path = `/${input}`;
        navigate(path);
    };

    return (
        <div className="parallax-group" >
            <Header></Header>
            <h1 className="splash-title header">Parallax Test</h1>
            <h2 className="splash-title sub-header">Sub Title Here</h2>
        </div>
    )
}

export default Home;