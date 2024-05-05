import {} from 'react';
import '../css/estilo.css';
import logo from "../assets/logoMarProfundo.png";


function Home() {
  return (
    <>
      <div className="container bg-image">
        <div className="produtos">
          <img src={logo}/>
          <h1>Produtos</h1>
          <p>Compre os melhores peixes, com a melhor qualidade e envio rápido</p>
          <a href="" className="btn">
            Conheça nossa loja
          </a>       
        </div>
      </div>
    </>
  );
}

export default Home;
