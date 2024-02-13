import { useState } from 'react';
import styled from 'styled-components';
import Square from './Square';

const StiledContainer = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
`;

const Tictac = () => {
  const [number, setNumber] = useState(1);

  const incrementarNumero = () => {
    setNumber(number + 1);
  };

  return (
    <StiledContainer>
      {Array(9)
        .fill(0)
        .map((_, index) => {
          return <Square key={index} incrementarNumero={incrementarNumero} number={number} />;
        })}
    </StiledContainer>
  );
};
export default Tictac;
