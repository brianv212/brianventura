import gql from 'graphql-tag';

export const FETCH_MESSAGES = gql`
{
  getMessages {
    id
    email
    message
    createdAt
  }
}
`;