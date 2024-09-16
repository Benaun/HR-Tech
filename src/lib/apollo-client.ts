import { useLoginStore } from '@/store/store';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: 'https://api.escuelajs.co/graphql',
})

const authLink = setContext((_, { headers }) => {
    const { accessToken } = useLoginStore.getState();
    return {
        headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : ''
        }
    }
})
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default client