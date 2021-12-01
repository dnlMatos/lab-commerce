import React from "react";
import styled from "styled-components";
import App from "../App";

const ContainerCarrinho = styled.div`
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
`;

const Descricao = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin-right: 10px;
`;

class Carrinho extends React.Component {
  state = {
    adicionado: false,
    qtdeProduto: 0,
    valorCarrinho: 0,
  };

  render() {
    return (
      <ContainerCarrinho>
        <h2>Carrinho:</h2>
        <Descricao>
          <P>{this.state.qtdeProduto}</P>
          <P>{this.state.nomeProduto}</P>
          <button>Remover</button>
        </Descricao>
        <p>Valor das compras:{this.state.valorCarrinho}</p>
      </ContainerCarrinho>
    );
  }
}

export default Carrinho;
