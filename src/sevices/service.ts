import { useLoginStore } from '@/store/store';
import { gql } from '@apollo/client'
import client from '../lib/apollo-client';

const LOGIN = gql`
     mutation Login($email: String!, $password: String!) {
       login(email: $email, password: $password) {
         access_token
         refresh_token
       }
     }
`;

const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      access_token
      refresh_token
    }
  }
`;

export const login = async (email: string, password: string) => {
  const { saveTokens } = useLoginStore.getState();
  try {
    const result = await client.mutate({
      mutation: LOGIN,
      variables: { email, password }
    });
    if (result.data && result.data.login) {
      const { access_token, refresh_token } = result.data.login;
      saveTokens(access_token, refresh_token)
    }
  } catch (error) {
    console.log(error)
  }
}

export const refreshAccessToken = async () => {
  const { refreshToken, saveTokens } = useLoginStore.getState();
  try {
    const result = await client.mutate({
      mutation: REFRESH_TOKEN,
      variables: { refreshToken }
    });
    if (result.data && result.data.refreshToken) {
      const { access_token, refresh_token } = result.data.refreshToken;
      saveTokens(access_token, refresh_token)
    }

  } catch (error) {
    console.log(error)
  }
}

export const logout = () => {
  const { clearTokens } = useLoginStore.getState();
  clearTokens()
}
