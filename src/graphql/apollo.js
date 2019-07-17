import Vue                from 'vue';
import VueApollo          from 'vue-apollo';
import { ApolloClient }   from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext }     from 'apollo-link-context';
import { InMemoryCache }  from 'apollo-cache-inmemory';

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

const cache = new InMemoryCache({
    addTypename: false
});

// Create the apollo client
const apolloClient = new ApolloClient({
    link,
    cache,
    connectToDevTools: true
});

// Install the vue plugin
Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});
