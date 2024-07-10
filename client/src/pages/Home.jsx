// import { useNavigate } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import DonorList from '../components/DonorList';

const Home = () => {
    // let navigate = useNavigate();
    // const routeChange = (input) => { 
    //     console.log(input);
    //     let path = `/${input}`;
    //     navigate(path);
    // };

    return (
        <div className="parallax-group" >
            <h1 className="splash-title parallax-header">Title Here</h1>
            <h2 className="splash-title parallax-sub-header">Sub Title Here</h2>
            <DonorList />
        </div>
    )
}

export default Home;