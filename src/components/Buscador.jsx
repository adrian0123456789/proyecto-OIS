import styled from 'styled-components';
import Producto from './Producto';
import { useEffect, useState } from 'react';

const StyledBox = styled.div`
  width: 350px;
  margin: 0 auto;
  border: 2px black solid;
  padding: 15px;
  h4 {
    text-align: center;
    margin: 4px;
  }
`;

const StyleContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  div {
    width: 40%;
  }
`;

const StyleSearch = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 0 30px;
  input {
  }
`;

const StyleCategory = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const data = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

const Buscador = () => {
  const [showStockedProducts, setShowStockedProducts] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [searchToken, setSearchToken] = useState('');

  const handleCheckbox = e => {
    setShowStockedProducts(prevShow => !prevShow);
  };

  const handleSearch = e => {
    setSearchToken(e.target.value);
  };

  const frutas = filteredData.filter(fruta => {
    return fruta.category === 'Fruits' && ((showStockedProducts && fruta.stocked) || !showStockedProducts);
  });

  const vegetales = filteredData.filter(vegetal => {
    return vegetal.category === 'Vegetables' && ((showStockedProducts && vegetal.stocked) || !showStockedProducts);
  });

  useEffect(() => {
    const newData = data.filter(item => item.name.toLowerCase().indexOf(searchToken.toLowerCase()) >= 0 || searchToken === '');

    setFilteredData(newData);
  }, [searchToken]);

  return (
    <StyledBox>
      <StyleSearch>
        <input onChange={handleSearch} value={searchToken} placeholder="Buscar..." />
        <div>
          <input defaultChecked={false} onChange={handleCheckbox} type="checkbox"></input>
          <label>Mostrar colo productos con Stock</label>
        </div>
      </StyleSearch>
      <div>
        <StyleContent>
          <h3>Nombre</h3>
          <h3>Precio</h3>
        </StyleContent>
        <StyleCategory>
          <h4>Frutas</h4>
          {frutas.map(fruta => (
            <Producto key={fruta.name} producto={fruta} />
          ))}
        </StyleCategory>

        <StyleCategory>
          <h4>Vegetales</h4>
          {vegetales.map(vegetal => (
            <Producto key={vegetal.name} producto={vegetal} />
          ))}
        </StyleCategory>
      </div>
    </StyledBox>
  );
};

export default Buscador;
