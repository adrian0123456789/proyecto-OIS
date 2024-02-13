import styled from 'styled-components';

const StyleContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  div {
    width: 40%;
    color: ${props => (props.sinStock ? 'red' : 'black')};
    &:nth-child(2) {
      text-align: right;
    }
  }
`;

const Producto = ({ producto }) => {
  return (
    <StyleContent sinStock={!producto.stocked}>
      <div>{producto.name}</div>
      <div>{producto.price}</div>
    </StyleContent>
  );
};

export default Producto;
