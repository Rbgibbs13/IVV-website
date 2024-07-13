// import { useNavigate } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Gallery from '../components/Gallery';
import DonorList from '../components/DonorList';
import PostList from '../components/PostList';

import frenchWoman from '/images/test-images/french-woman-2.jpg';

const Home = () => {
    // let navigate = useNavigate();
    // const routeChange = (input) => { 
    //     console.log(input);
    //     let path = `/${input}`;
    //     navigate(path);
    // };

    return (
        <div className="inline-flex flex-col flex-no-wrap items-center home-container parallax-group" >
            <hr className='wide-rule'></hr>
            <div className='splash-div'>
                <img className='before-image' src={frenchWoman}>
                </img>
                <p className="truncate splash-title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, erat at suscipit blandit, ante ante dignissim dolor, vitae fermentum libero sem at quam. Nullam vulputate nunc in mauris faucibus blandit. Ut id nisi congue, commodo augue quis, vehicula dolor. Cras maximus nibh ut erat pulvinar egestas. Duis eu est et ex maximus pellentesque. Suspendisse aliquam eget eros ut porttitor. Nunc feugiat fringilla venenatis.
                    Donec venenatis ipsum tortor, sed euismod neque elementum finibus. Sed iaculis ante nisl, a facilisis mi tincidunt quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ligula neque, fermentum sit amet porta non, dictum vel lorem. Praesent eu gravida tortor. Donec egestas, diam ac rutrum facilisis, odio neque hendrerit dolor, posuere sodales nibh erat nec turpis. Suspendisse dapibus diam purus, vel egestas dui vulputate condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas rhoncus lectus nec magna cursus, eu fermentum urna ornare. Maecenas hendrerit varius viverra. Duis non quam nulla. Duis tellus velit, mollis et lorem sed, cursus pharetra lectus. Mauris sapien sem, mattis quis lacus non, aliquam porttitor arcu.
                </p>
            </div>
            <hr className='wide-rule'></hr>

            <Gallery/>
            <hr className='wide-rule'></hr>

            <div className='splash-div'>
                <h2 className="truncate div-header">
                    Updates From Africa
                </h2>
                <PostList />
            </div>
            <hr className='wide-rule'></hr>
            <div className='splash-div'>
                <DonorList />
            </div>
            
        </div>
    )
}

export default Home;