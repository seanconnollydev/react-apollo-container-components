import React from 'react';
import { graphql } from 'react-apollo';
import GET_CAT_QUERY from './get-cat-query.graphql';
import Cat from './Cat';

const CatContainerHOC = (props) => {
  const { loading, error, data } = props;
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return <Cat cat={data.cat} />;
};

export default graphql(GET_CAT_QUERY)(CatContainerHOC);
