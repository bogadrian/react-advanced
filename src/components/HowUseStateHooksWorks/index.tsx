import { useState } from 'react';

export const HowUseStateHookWorks = () => {
  const [name, setName] = useState('Adrian');

  const handleSetName = () => {
    setName('Bogdan');
    alert(name);
  };

  return (
    <>
      <h1>{name}</h1>
      <button onClick={handleSetName}>Set new name</button>
    </>
  );
};
