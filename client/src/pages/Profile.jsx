import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, 
    QUERY_ME 
    // QUERY_ARTICLES 
} from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
    const { profileId } = useParams();

    console.log({
        variables: { profileId: profileId },
    });

    const { loading, data, error } = useQuery(
        profileId ? QUERY_SINGLE_USER : QUERY_ME, {
            variables: { profileId: profileId },
        }
    );

    const profile = data?.me || data?.profile || {};

    if(Auth.loggedIn()) {
        return (
            <div className='profile-main'>
                <h2>Profile Page</h2>
            </div>
        )
    }

    if(loading) {
        return <div>Loading...</div>
    }

    if(!profile?.name) {
        return (
            <div className='signup-parent'>
                <h3 className='signup-text'>
                    Login to see your profile page!
                    <Link to='/Login'>Login.</Link>
                    <Link to='/Signup'>Signup.</Link>
                </h3>
            </div>
        )
    }

    return (
        <main>
            <div>
                <h2 className='profile-header'>
                    {profileId ? `${profile.name}'s` : 'Your'}
                </h2>
                
                {error ? (
                    <div className='bg-danger text-white'>
                        {error.message}
                    </div>
                ) : null}
            </div>
        </main>
    );
};

export default Profile;