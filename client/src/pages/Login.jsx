import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            console.log(data);
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <main className='flex-row login-main'>
            <div className='login-parent'>
                {data ? (
                    <p>
                        Success! You are logged in!
                        return to the {' '}
                        <Link to='/'>Homepage.</Link>
                    </p>
                ) : (
                    <div className='login-container'>
                        <h1 className='login-title'>Login!</h1>
                        <form className='login-form' onSubmit={handleFormSubmit}>
                        <div className='form-div-container'>
                            <div className='form-div'>
                            <label className='form-label' for='email'>Email: </label>
                            <input
                                className="form-input"
                                placeholder="Email"
                                id='email'
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                            />
                            </div>
                            <div className='form-div'>
                            <label className='form-label' for='password'>Password: </label>
                            <input
                                className="form-input"
                                placeholder="******"
                                id='password'
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                            </div>
                        </div>
                        <div className='form-div-container'>
                            <button
                            className="btn btn-block btn-info"
                            style={{ cursor: 'pointer' }}
                            type="submit">
                            Submit
                            </button>
                        </div>
                        
                        </form>
                        <div className="login-signup-menu">
                        <a className="login-signup-text" href="/signup">No Account? Sign-Up!</a>
                        </div>
                    </div>
                )}

                {error ? (
                    <div className='bg-danger text-white'>
                        {error.message}
                    </div>
                ) : null}
            </div>
        </main>
    );
};

export default Login;