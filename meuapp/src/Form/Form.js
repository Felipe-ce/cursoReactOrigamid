import React from 'react';
import Button from './Button';
import Input from './Input';

const form = () => {
  return (
    <form>
      <Input id="email" label="Email" required />
      <Input id="senha" label="Senha" type="password" />
      <Button />
    </form>
  );
};

export default form;
