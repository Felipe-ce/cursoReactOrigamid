import React from 'react';

const luana = {
  nome: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2000' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  nome: 'Mario',
  idade: 24,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};
const App = () => {
  const dados = luana;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$', '')))
    .reduce((a, b) => a + b);
  return (
    <>
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação: {' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total de gasto: {total}</p>
      {total > 10000 && <p>Voce esta gastando de mais</p>}
    </>
  );

    const obrasFixas = [
      'Monalisa',
      'O pensador',
      'O Grito'
    ]
    const obrasVariaveis = [
      ...obrasFixas,
      'Santa Ceia',
      'Abaporou'
    ]


};

export default App;
