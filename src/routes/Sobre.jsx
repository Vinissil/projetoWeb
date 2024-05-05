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
          Entre em nosso mundo sonoro na loja de instrumentos musicais One Music. Oferecemos uma vasta seleção de guitarras, teclados, baterias e muito mais, para músicos de todos os níveis e estilos. Nossa equipe experiente está aqui para ajudá-lo a encontrar o instrumento perfeito e oferecer conselhos especializados. Explore nosso espaço acolhedor e inspire-se com a variedade de sons que podem dar vida à sua música. Desde iniciantes até profissionais, estamos comprometidos em fornecer os melhores instrumentos e acessórios para aprimorar sua jornada musical. Visite-nos hoje e descubra seu próximo grande som na Melodia Vibrante!
        </p>
        <img className='img-loja' src={loja}/>
      </section>
    </>
  );
}
export default Sobre;
