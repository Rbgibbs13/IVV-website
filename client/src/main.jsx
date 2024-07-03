import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import App from './App.jsx';
import About from './pages/About.jsx';
import Checkout from './pages/Checkout.jsx';
import Donors from './pages/Donors.jsx';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Order from './pages/Order.jsx';
import Profile from './pages/Profile.jsx';
import Signup from './pages/Signup';

// import Success from './pages/Success.jsx';
// import Cart from './components/Cart/index.jsx';

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/profile/:profileId',
                element: <Profile />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/donors',
                element: <Donors/>
            },
            {
                path: '/order',
                element: <Order/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)