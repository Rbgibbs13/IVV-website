import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';

import { useEffect } from 'react';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

import { MyProvider } from './utils/GlobalState';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/Scroll';

import './App.css';
import './output.css';

const httpLink = createHttpLink({
   uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App () {
    return (
        <ApolloProvider client={client}>
            <MyProvider>
                <ScrollToTop/>
                <Header />
                    <div className="main-container">
                        <Outlet />
                    </div>
                <Footer />
            </MyProvider> 
        </ApolloProvider>
    )
}

export default App;