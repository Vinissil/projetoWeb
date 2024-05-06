import {} from 'react';
import '../css/estilo.css';
import logo from "../assets/LogoViolao.png";
import slide1 from "../assets/violao-1.jpg";
import slide2 from "../assets/tarrega-1.webp";
import slide3 from "../assets/piccolo-1.webp";




function Home() {
  
  return (
    
    <>


    <div id='home' className="bg-image">
      <div className="container ">
        <div className="produtos">
          <img src={logo}/>
          <h1>Produtos</h1>
          <p>Compre os melhores instrumentos, com a melhor qualidade e envio rápido</p>

          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={slide1} alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={slide2} alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={slide3} alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
          </div>


          <a href="sobre" className="btn">
            Conheça nossa loja
          </a>       
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
