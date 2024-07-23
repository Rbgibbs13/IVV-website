import PostList from "../components/PostList";
import Data from '../components/Data';

const About = () => {
    return (
        <main className="about-main">
            <div className="about director">
                <h2>Our Directors</h2>
            </div>
            <hr className="wide-rule"></hr>
            <div className='splash-div'>
                <Data></Data>
            </div>
            <hr className="wide-rule"></hr>
            <div className="about objective">
                <h2>Our Goals</h2>
            </div>
            <hr className="wide-rule"></hr>
            <div>
                <PostList></PostList>
            </div>
        </main>
    )
}

export default About;