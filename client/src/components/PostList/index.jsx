import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import './style.css';

const PostList = () => {
    const { loading, error, data } = useQuery(QUERY_POSTS);
    // if(data) console.log('-----------' + data);

    if(loading) {
        return (
            <div className='loading'>Loading...</div>
        )
    }

    if(error) {
        console.error(error);
        return (
            <div className='error'>Error</div>
        )
    }

    return (
        <div className='post-parent'>
            {data.posts.length ? (
                <div>
                    <ul>
                        {data.posts.map((post) => {
                            if(post.published) {
                                <li className='post-element'>
                                    <h2>{post.title}</h2>
                                    <img src={post.image}></img>
                                    <p>{post.text}</p>
                                </li>
                            }
                        })}
                    </ul>
                </div>
            ) : (
                <div>
                    <h2>No Recent Posts!</h2>
                </div>
            )}
        </div>
    )
}

export default PostList;