import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import App from './App';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Donors from './pages/Donors';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Order from './pages/Order';
import Profile from './pages/Profile';
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
                path: '/home',
                element: <Home/>
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

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);