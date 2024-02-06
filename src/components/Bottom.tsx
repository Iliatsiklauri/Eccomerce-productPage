import React from 'react';
import { propType } from '../types';

const Bottom = ({ name, setName }: propType) => {
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <>
      <h1>this is Bottom {name}</h1>
      <input className="border-2 border-black" type="text" onChange={changeName} />
    </>
  );
};

export default Bottom;
