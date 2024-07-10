import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import './style.css';

const PostList = () => {
    const { loading, error, data } = useQuery(QUERY_POSTS);

    if(loading) {
        return (
            <div className='loading'>Loading...</div>
        )
    }

    if(error) {
        return (
            <div className='error'>{error}</div>
        )
    }

    return (
        <div className=''>
            {data.posts.length ? (
                <div>
                    <h2>Posts Here</h2>
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