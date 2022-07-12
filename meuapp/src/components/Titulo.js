import React from 'react';

const Titulo = ({texto }) => {
  return (
    // Criando um componente que recebe o texto quando for importado
    <h1 style={{color: '#4c8b'}}>{texto}</h1>
  );
};

export default Titulo;

// com a forma desestruturada
// const Titulo = ({texto})
// <h1>{texto}</h1>
