import React from 'react';
import { Query } from 'react-apollo';
import GET_CAT_QUERY from './get-cat-query.graphql';
import Cat from './Cat';

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
