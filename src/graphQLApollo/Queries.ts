import { gql } from '@apollo/client';

export const GET_USERS = gql`
query Query {
    country(code: "BR") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;
