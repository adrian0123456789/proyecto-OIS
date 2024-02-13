import { useState } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 400px;
  color: white;
  background-color: #211f25;
  font-size: 16px;
  border-radius: 8px;
  overflow: hidden;
`;

const ContentCard = styled.div`
  padding: 0px 15px 15px 15px;
`;

const Actions = styled.div`
  display: flex;
  gap: 15px;
`;
const ButtonCard = styled.div`
  background-color: none;
  color: #4577a2;
`;

const Card = ({ info }) => {
  const [numero, setNumero] = useState(0);
  const [showText, setShowText] = useState(false);

  const aumentarNumero = () => {
    setNumero(numero + 1);
  };

  const mostrarTexto = () => {
    setShowText(!showText);
  };
  console.log(info);
  return (
    <StyledCard>
      <div>
        <img src={info.img} width="100%" height="250px" style={{ objectFit: 'cover' }} />
      </div>
      <ContentCard>
        <h3 style={{ margin: '8px 0' }}>{info.title}</h3>
        <p>{info.text}</p>
        <p style={{ margin: '8px 0' }}>visto {numero} veces</p>
        {showText && <p>la casa es grande</p>}
        <Actions>
          <ButtonCard onClick={aumentarNumero}>SHARE</ButtonCard>
          <ButtonCard onClick={mostrarTexto}>SEE {!showText ? 'MORE' : 'LESS'}</ButtonCard>
        </Actions>
      </ContentCard>
    </StyledCard>
  );
};

export default Card;
