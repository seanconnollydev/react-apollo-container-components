import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Cat from './Cat';

export const GET_CAT_QUERY = gql`
  {
    cat(id: "123") {
      id
      name
    }
  }
`;

const CatContainer = () => (
  <Query query={GET_CAT_QUERY}>
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error :(</p>;
      }

      return <Cat cat={data.cat} />;
    }}
  </Query>
);

export default CatContainer;
