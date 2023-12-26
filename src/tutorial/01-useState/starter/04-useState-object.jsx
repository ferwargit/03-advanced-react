import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'coding',
  });

  const displayPerson = () => {
    setPerson({ ...person, name: 'John', age: 25, hobby: 'gaming' });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>Hobby: {person.hobby}</h2>
      <button className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
