import styled from 'styled-components';

const StyledFooter = styled.div`
  width: 100%;
  margin-top: 90px;
`;
const StyledFooterInformation = styled.div`
  background-color: #f6f4f3;
  padding: 46px 0;
  @media (max-width: 450px) {
    padding: 40px 20px;
  }
`;
const StyledFooterContent = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  @media (max-width: 450px) {
    width: 100%;
    flex-direction: column;
    gap: 12px;
  }
`;
const StyledFooterInformationData = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  gap: 15px;
  h4 {
    font-size: 14px;
    font-weight: 600;
  }
  img {
    width: 32px;
  }
`;
const StyledFooterAuthor = styled.div`
  background-color: #054580;
  color: white;
  padding: 20px 0;
  font-size: 14px;
  font-weight: 400;
  div {
    width: 80%;
    display: flex;
    &:nth-child(2) {
      display: flex;
      justify-content: flex-end;
    }
  }
  @media (max-width: 450px) {
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledFooterInformation>
      <StyledFooterContent>
        <StyledFooterInformationData>
          <img src="./icons/location.svg" />
          <div>
            <h4>Dirección:</h4>
            <div>Calle Las Golondrinas 393. San Isidro. Lima</div>
          </div>
        </StyledFooterInformationData>
        <StyledFooterInformationData>
          <img src="/icons/phone.svg" />
          <div>
            <h4>Teléfono de contacto:</h4>
            <div>968926178</div>
          </div>
        </StyledFooterInformationData>
        <StyledFooterInformationData>
          <img src="./icons/mail.svg" />
          <div>
            <h4>Correo electrónico:</h4>
            <div>informes@oisglobal.org</div>
          </div>
        </StyledFooterInformationData>
      </StyledFooterContent>
    </StyledFooterInformation>
    <StyledFooterAuthor>
      <StyledFooterContent>
        <div>
          <div>© Todos los derechos reservados. 2024</div>
          <div>Desarrollado por: CODEANDO</div>
        </div>
      </StyledFooterContent>
    </StyledFooterAuthor>
  </StyledFooter>
);
export default Footer;
