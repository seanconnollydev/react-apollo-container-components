import React from 'react';

const Cat = (props) => {
  const { cat } = props;
  return (
    <div>
      <p>id: {cat.id}</p>
      <p>name: {cat.name}</p>
    </div>
  );
};

export default Cat;
