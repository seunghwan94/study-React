import React from 'react';

const students = [
  {id:1, name : 'test1'},
  {id:2, name : 'test2'},
  {id:3, name : 'test3'},
  {id:4, name : 'test4'},
  {id:5, name : 'test5'},
]
const ListAndComponentkey = () => {
  return (
    <ul>
      {students.map(std => <li key={std.id}>{std.name}</li> )}
    </ul>
  );
}

export default ListAndComponentkey;
