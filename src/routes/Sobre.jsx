import {} from 'react';
import '../css/estilo.css';
import loja from "../assets/lojaInstrumentos.jpg";
import logo from "../assets/LogoViolao.png";
function Sobre() {
  return (
    <>
      <section className="sobre">
        <img src={logo}/>
        <h1>Sobre</h1>
        <p className='descricao'>
        </p>
        <img className='img-loja' src={loja}/>
      </section>
    </>
  );
}
export default Sobre;
