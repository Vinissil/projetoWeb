import {} from 'react';
import '../css/estilo.css';

function Contato() {
  return (
    <>
      <section className="contato">
    
        <form> 
        <h1>Contato</h1>
          <p>
            Nome
          <input type="text" placeholder='Digite seu Nome'/>
          </p>
          <p>
            Email
            <input type="text" placeholder='Digite um Email valido'/>
          </p>
          <textarea placeholder='Deixe sua mensagem'></textarea>
        </form>
      </section>
    </>
  );
}
export default Contato;
