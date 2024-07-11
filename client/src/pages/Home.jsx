// import { useNavigate } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Gallery from '../components/Gallery';
import DonorList from '../components/DonorList';
import PostList from '../components/PostList';

const Home = () => {
    // let navigate = useNavigate();
    // const routeChange = (input) => { 
    //     console.log(input);
    //     let path = `/${input}`;
    //     navigate(path);
    // };

    return (
        <div className="flex items-center home-container parallax-group" >
            <h1 className="splash-title parallax-header">Title Here</h1>
            <h2 className="splash-title parallax-sub-header">Sub Title Here</h2>
            <Gallery/>
            {/* <PostList /> */}
            <DonorList />
        </div>
    )
}

export default Home;