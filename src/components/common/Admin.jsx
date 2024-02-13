import styled from 'styled-components';
import Button from './button';
import AdminCategories from './AdminCategories';

const StyledAdmin = styled.div`
  width: 100%;
`;
const StyledHeaderAdmin = styled.div`
  width: 100%;
  background-color: #054580;
`;
const StyledHeaderAdminContent = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 22px 0;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;
const StyledContentAdmin = styled.div`
  width: 100%;
  min-height: calc(100vh - 199px);
  margin-top: 25px;
`;
const StyledContentAdminNav = styled.div`
  padding: 20px 30px;
  width: 1440px;
  margin: 0 auto;
  background-color: #f2f9ff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    gap: 30px;
    color: #054580;
    font-weight: 600;
    font-size: 16px;
  }
`;
const StyledContentAdminOptions = styled.div`
  width: 1440px;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;

  justify-content: space-between;
`;
const StyledContentCategories = styled.div`
  width: 215px;
  height: 203px;
  background-color: #f2f9ff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  gap: 50px;
  color: #054580;
  font-weight: 500;
  font-size: 16px;
`;
const StyledContentList = styled.div``;
const StyledFooterAdmin = styled.div`
  width: 100%;
  background-color: #054580;
  padding: 18px 0;

  div {
    width: 1440px;
    margin: 0 auto;
    color: white;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
`;
const Admin = () => {
  return (
    <StyledAdmin>
      <StyledHeaderAdmin>
        <StyledHeaderAdminContent>
          <img
            src="https://s3-alpha-sig.figma.com/img/b0df/28d7/7937cdd175de1b75f441c7471b2166f5?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TtcO4AL09DvtJp7Q1yzd3kVzuwnZ3d3u61PGetFSqICTBbDbzv4yMvJysagsmss4mTcz1v7us9SoCdBle74TOSyVbxQjRTw-~cgNCxrOmWBACUJVZxFHPuDU~yJFPnSRwtauQFWqBEjfgg2kA~xA4Sy6q4YOPukAvVkTDp64m6OrU1qYBgmMPmcBkvUfKu5oGKOjtelR63UWUXi2pSv0aGq2x1TVl24avXUoCqWftsfwOQH31-D9SDTkt4geEh85yK~RfrqlzsmhoVHKGdEf94jqQJBEGocFcJCrAOO7OOn4N5LtNHGpXzq3MKsSbyuAhz24VG-RYu2JmTpk8qv8Kw__"
            width={'170px'}
          />
          <div>
            <Button text={'Hola, Administrador'} type="outlined" icon="user" size="al"></Button>
            <Button text={'Cerrar Sesión'} type="yellow" />
          </div>
        </StyledHeaderAdminContent>
      </StyledHeaderAdmin>
      <StyledContentAdmin>
        <StyledContentAdminNav>
          <div>
            <a>Programas</a>
            <a>Inscripciones</a>
          </div>
          <div>
            <a>Datos personales</a>
            <a>Cambiar contraseña</a>
          </div>
        </StyledContentAdminNav>
        <StyledContentAdminOptions>
          <StyledContentCategories>
            <a>Facultades</a>
            <a>Tipo de Programa</a>
            <a>Programa</a>
          </StyledContentCategories>
          <StyledContentList>
            <AdminCategories />
          </StyledContentList>
        </StyledContentAdminOptions>
      </StyledContentAdmin>
      <StyledFooterAdmin>
        <div>
          <h2>© Todos los derechos reservados. 2024</h2>
          <h2>Desarrollado por : CODEANDO</h2>
        </div>
      </StyledFooterAdmin>
    </StyledAdmin>
  );
};

export default Admin;
