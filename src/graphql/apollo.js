import Vue                from 'vue';
import VueApollo          from 'vue-apollo';
import { ApolloClient }   from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext }     from 'apollo-link-context';
import { 
    InMemoryCache, 
    IntrospectionFragmentMatcher 
} from 'apollo-cache-inmemory';

import introspectionQueryResultData from './unionsAndInterfaces.json';

const httpLink = new createHttpLink({
    uri: (process.env.NODE_ENV !== 'development') ? '/graphql' : 'http://localhost:4500/graphql'
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem('sqlHospitalLogedInUserToken') || ''
        }
    };
});

const link = authLink.concat(httpLink);

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData
});

const cache = new InMemoryCache({
    fragmentMatcher,
    addTypename: false
});

// Create the apollo client
const apolloClient = new ApolloClient({
    link,
    cache,
    addTypename: true,
    connectToDevTools: true
});

// Install the vue plugin
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});

export default apolloProvider;