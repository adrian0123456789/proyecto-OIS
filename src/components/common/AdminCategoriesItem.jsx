import styled from 'styled-components';
import Button from './button';

const StyledCategoriesItem = styled.div`
  border-top: 1px #dfdfdf solid;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
`;

const AdminCategoriesItem = ({ program }) => {
  return (
    <StyledCategoriesItem>
      <div>{program.title}</div>
      <div style={{ display: 'flex', gap: '5px' }}>
        <Button text={'Eliminar'} type="warning" size="amd" fontWigth="admin" font="admin" />
        <Button text={'Editar'} size="asm" fontWigth="admin" font="admin" />
      </div>
    </StyledCategoriesItem>
  );
};

export default AdminCategoriesItem;
