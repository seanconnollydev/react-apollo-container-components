import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Cat from './Cat';

export const HOC_GET_CAT_QUERY = gql`
  {
    cat(id: "123") {
      id
      name
    }
  }
`;

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

export default graphql(HOC_GET_CAT_QUERY)(CatContainerHOC);
