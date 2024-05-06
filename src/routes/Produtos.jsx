import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GrFormEdit, GrTrash } from 'react-icons/gr';
import '../css/estilo.css'; // Importe o arquivo de estilos

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/produto/")
      .then(resp => resp.json())
      .then(data => setProdutos(data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/produto/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setProdutos(produtos.filter(produto => produto.id !== id));
      console.log(`Produto com ID ${id} excluído`);
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="produtos-container">
      <div className="produtos-content">
        <h1>LISTA DE PRODUTOS</h1>
        <table className="produtos-table">
          <thead>
            <tr>
              <th>IMAGEM</th>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td><img src={produto.imagem} alt={produto.nome} style={{ width: '100px' }} /></td>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
                <td>
                  <Link to={`/produto/${produto.id}`}>
                    <GrFormEdit />
                  </Link>
                  {' '}
                  <button onClick={() => handleDelete(produto.id)}>
                    <GrTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Produtos;
