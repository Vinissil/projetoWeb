import {} from 'react';
import '../css/estilo.css';
import loja from "../assets/loja.jpeg";
import logo from "../assets/logoMarProfundo.png";

function Sobre() {
  return (
    <>
      <section className="sobre">
        <img src={logo}/>
        <h1>Sobre</h1>
        <p className='descricao'>
            Bem-vindo à "Mar Profundo Aquários e Peixes Exóticos", onde a beleza do oceano encontra o seu lar. Nossa loja é um santuário para entusiastas de aquários, oferecendo uma vasta seleção de tanques, plantas aquáticas e peixes de todas as cores e tamanhos. Com uma equipe apaixonada e experiente, estamos aqui para orientar desde iniciantes até aquaristas avançados, garantindo um ambiente marinho saudável e próspero. Explore nosso mundo submarino e deixe-se encantar pela diversidade e tranquilidade que só um aquário bem cuidado pode oferecer. Venha nos visitar e transforme seu espaço em um refúgio aquático de serenidade e beleza.
        </p>
        <img className='img-loja' src={loja}/>
      </section>
    </>
  );
}
export default Sobre;
