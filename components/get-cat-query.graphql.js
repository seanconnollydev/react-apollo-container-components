import gql from 'graphql-tag';

const GET_CAT_QUERY = gql`
  {
    cat(id: "123") {
      id
      name
    }
  }
`;

export default GET_CAT_QUERY;
