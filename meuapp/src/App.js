import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Form from './Form/Form';


// Props
const Titulo = ({texto, cor, children})=>{
  return <h1 style={{color: cor}}>{texto}, {children}</h1>
}


const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />

    <Titulo cor="blue" texto="Meu titulo 1"/>
    <Titulo cor="red" texto="Meu titulo 2"/>
    <Titulo>
      <p>azul</p>
      <p>Felipe Xavier</p>
    </Titulo>

    </>
  );
};

export default App;
