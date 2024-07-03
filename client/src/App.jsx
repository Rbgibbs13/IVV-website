import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

import { BlogProvider } from './utils/GlobalState';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import './components/global.css';

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

function App() {
    return (
        <ApolloProvider client={client}>
            <BlogProvider>
                <Header />
                    <div className="container flex-column justify-flex-start min-100-vh">
                        <Outlet />
                    </div>
                <Footer />
            </BlogProvider> 
        </ApolloProvider>
    );
}

export default App;