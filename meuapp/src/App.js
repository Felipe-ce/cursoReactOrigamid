import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Main from './components/Main';
import Produtos from './components/Produtos';
import Form from './Form/Form';

const App = () => {
  const { pathname } = window.location;

  let Pagina;
  if (pathname === '/produtos') {
    Pagina = Produtos
  } else {
    Pagina = Home
  }

  return (
    <>
      <Header />
      <Pagina />
    </>
  );
};

export default App;
