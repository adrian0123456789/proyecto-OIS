import styled from 'styled-components';
import Button from './button';
import AdminCategoriesInfo from './AdminCategoriesItem';
import AdminCategoriesList from './AdminCategoriesList';
import { useState } from 'react';

const StyledListGeneral = styled.div`
  width: 1200px;
`;
const StyledListAdd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  color: #054580;
  font-size: 20px;
  font-weight: 500;
  img {
    width: 24px;
  }
`;
const StyledModal = styled.div`
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #05458088;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledModalAdd = styled.div`
  width: 676px;
  height: 727px;
  border-radius: 8px;
  background-color: #f4f4f4;
  padding: 50px 60px;
  div {
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-weight: 300;
      font-size: 14px;
      h2 {
        color: #054580;
        font-weight: 500;
        font-size: 20px;
      }
      label {
        color: black;
        font-size: 14px;
        font-weight: 300;
      }
      input {
        border: 1px #d3d3d3 solid;
      }
      textarea {
        border: 1px #d3d3d3 solid;
      }
    }
  }
`;
const StyledHeaderForm = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;
const StyledList = styled.div`
  border-radius: 8px;
  border: 1px #d2d2d2 solid;
  padding: 40px 30px;
`;
const StyledHeaderList = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  margin-bottom: 10px;
  h2 {
    color: #054580;
    font-weight: 500;
    font-size: 16px;
  }
`;
const StyledCategory = styled.div``;

const AdminCategories = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledListGeneral>
      <StyledListAdd>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="./icons/file.svg" />
          <div>Lista de categorías</div>
        </div>
        <Button text={'Agregar'} onClick={handleClick} fontWigth="admin" font="admin" size="amd" />
        {showModal && (
          <StyledModal>
            <StyledModalAdd>
              <div>
                <StyledHeaderForm>
                  <img src="./icons/file.svg" />
                  <h2>Faculad</h2>
                </StyledHeaderForm>
                <form>
                  <label>Nombre de categoría</label>
                  <input style={{ height: '40px' }} />
                  <label>Imagen</label>
                  <input type="file" />
                  <label>Descripcion</label>
                  <textarea style={{ height: '151px' }} />
                  <Button text={'Guardar'} />
                </form>
              </div>
            </StyledModalAdd>
          </StyledModal>
        )}
      </StyledListAdd>
      <StyledList>
        <StyledHeaderList>
          <h2>Nombre de Categoría</h2>
          <h2>Acción</h2>
        </StyledHeaderList>
        <StyledCategory>
          <AdminCategoriesList />
        </StyledCategory>
      </StyledList>
    </StyledListGeneral>
  );
};
export default AdminCategories;
