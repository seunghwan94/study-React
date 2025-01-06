import React from 'react';

const ListAndComponent = (props) => {
  const { numbers } = props;
  const lists = numbers.map((number) => <li key={number}>{number}</li>);
  return <ul>{lists}</ul>;
}

export default ListAndComponent;
