import Vue               from 'vue';
import { ApolloClient }  from 'apollo-client';
import { HttpLink }      from 'apollo-link-http';
import { setContext }    from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo         from 'vue-apollo';

const httpLink = new HttpLink({
  // You should use an absolute URL here
    // uri: '/graphql'
    uri: 'http://localhost:4500/graphql'
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem('sqlHospitalLogedInUserToken') || ''
        }
    };
});

// Create the apollo client
const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    connectToDevTools: true,
    cache: new InMemoryCache({
        addTypename: false
    })
});

// Install the vue plugin
Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});
