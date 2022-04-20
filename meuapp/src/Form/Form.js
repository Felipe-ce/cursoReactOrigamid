import React from 'react';
import Button from './Button';
import Input from './Input';

const form = () => {
  return (
    <form>
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default form;
