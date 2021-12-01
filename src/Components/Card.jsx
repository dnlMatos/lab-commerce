import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Imagem = styled.img`
  width: 300px;
`

export default function Card(props) {
  return (
    <CardContainer>
      <Imagem src={props.imagem} />
      <p>{props.nomeProduto}</p>
      <p>{props.precoProduto}</p>
      <button>Adicionar ao carrinho</button>
    </CardContainer>
  );
}
