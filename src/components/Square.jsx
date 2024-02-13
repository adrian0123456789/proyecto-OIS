import { useState } from 'react';

const Square = ({ incrementarNumero, number }) => {
  const [clicked, setClicked] = useState(false);
  const [valor, setValor] = useState(0);

  const handleClick = () => {
    if (!clicked) {
      incrementarNumero();
      setClicked(true);
      setValor(number);
    }
  };

  return (
    <div onClick={handleClick} style={{ border: '1px black solid', height: '100px', width: '100px', textAlign: 'center', lineHeight: '100px' }}>
      {clicked && valor}
    </div>
  );
};

export default Square;
