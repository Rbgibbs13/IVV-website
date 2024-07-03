import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StateProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        categories: [],
        posts: [],
        products: [],
        cart: [],
        cartOpen: false,
        currentCategory: '',
    });

    return <Provider value = {[state, dispatch]} {...props}/>
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StateProvider, useStoreContext };