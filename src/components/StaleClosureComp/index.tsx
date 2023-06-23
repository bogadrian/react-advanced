import { useState, useEffect, useCallback } from 'react';

const names = [
  'John',
  'Jane',
  'Jack',
  'Jill',
  'Kevin',
  'Kate',
  'Karl',
  'Smith',
  'Sandy',
  'Sally'
];

export const StaleClosureComp = () => {
  const [name, setName] = useState('Adrian');

  const handleNameChange = () => {
    setName(names[Math.floor(Math.random() * names.length)]);
  };

  const callApi = useCallback(() => {
    console.log('name in callApi function', name);
  }, [name]);

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <h1>{name}</h1>
      <button onClick={handleNameChange}>Set a new name</button>
    </>
  );
};
