import styled from 'styled-components';
import Button from './common/button';
import ProgramByFieldList from './common/ProgramByFieldList';
import NewPromgramList from './common/NewProgramList';

const StyledPrincipal = styled.div`
  width: 100%;
`;
const StyledHeader = styled.div``;
const StyledNav = styled.div`
  width: 100%;
  background-color: #054580;
`;
const StyledNavContent = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 22px 0;
`;
const StyledLogo = styled.div`
  width: 170px;
  img {
    width: 100%;
  }
`;
const StyledNavButtons = styled.div`
  display: flex;
  gap: 12px;
  padding: 17px;
`;
const StyledBanner = styled.div`
  background-image: url('https://s3-alpha-sig.figma.com/img/8f51/8fd5/80cc0b2e30b9961a6f1a11a9bbfdda70?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pnvOak4AUvV7ygS8IPvmilgFpkabnNURjFb9iIcvgC10yCAgTcv9XGCHMgGT~vuuASWzA9TRLj-hnAYYnJDoi9neuZlSOLMz2pfzd9-~Bc-ts5HAT0RSzFgrtpEZfuYl8kNa22nzxGGhrWIqEGlEwDbIhfkzukiqpfCybtgZNE4QCSoepNcmPqanfT4hIevBbL-eCFByUi0WvST4rhQAqzrN~Zii1n-65Yhv7FJj~SfvsRKFWJIQ6KCkrtbBe9TQ82jmVWP-FGgftMZbrNc025WSfaAFj~t4PdzwiJsuZoSAjf4XW5Slt-vYKamNMaYcGrvDHiSFC3INt9FrtQQ7yQ__');
  width: 100%;
  color: #1f1d44;
`;
const StyledContentBanner = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 100px 0;
`;
const StyledTextBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 25px;
  width: 40%;
  h2 {
    font-size: 36px;
    font-weight: 600;
  }
  p {
    font-size: 23px;
    font-weight: 500;
  }
`;
const StyledImageBanner = styled.div`
  display: flex;
  justify-content: center;
  background-size: 100%;
  background-image: url('https://s3-alpha-sig.figma.com/img/bc5f/9b9b/4bc847edbaeec47558630ffd87334738?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=osOQIrswBqWY9QjDzZR-Sb5siikCcX8ezaIkP3WQ3k4WaQ8oUJLuqJbrhQpXmfwF0aaAng~RIRmnG6smUHBNO~jSzNzxNHgRcKOpHgwr88PNEh2~js8wmj9hMt3vlFIZmy6BomjadVnhl2FvfT~nKIEbCmJtWMa0TdpCLeHDeVtN1mv3ssg9EWxrYmPyIO~afwWeexSVnsqXX8Z1pY-TiuuZrdXvk9d31faI23aHljqbSyGfEjiIMnMIzVO4W8rBiW83gbjrx-qG~DHsay0yu9BE~0VaTifZ9e0~eamG~g1pO0~8uBBTNywGadG-Ig8OZ23A7aaq6jfb~kAD~MtnNQ__');
  background-repeat: no-repeat;
  align-items: center;
  width: 480px;
  height: 480px;
  img {
    border-radius: 256px;
    width: 90%;
  }
`;
const StyledProgramsByFieldSection = styled.div`
  max-width: 1190px;
  margin: 0 auto;
`;
const StyledHeadSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  h3 {
    font-size: 28px;
    font-weight: 600;
  }
`;
const StyledFooter = styled.div`
  width: 100%;
  margin-top: 90px;
`;
const StyledFooterInformation = styled.div`
  background-color: #f6f4f3;
  padding: 46px 0;
`;
const StyledFooterContent = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
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
  display: flex;
  justify-content: space-around;
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
`;
const ProyectoOIS = () => {
  return (
    <StyledPrincipal>
      <StyledHeader>
        <StyledNav>
          <StyledNavContent>
            <StyledLogo>
              <img src="https://s3-alpha-sig.figma.com/img/b0df/28d7/7937cdd175de1b75f441c7471b2166f5?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mq1XftoELkNZlqoE06aIE15KnkxMu-AI0XQOIZbLN8REITDrz0XppDEvfUGPn6dd28PMLNkPQbkqzRUdFWuT6bHF~njcZtViDOCV~1VWWMNiuZE-PCCEp1UfPc6zwnnVbwPq3FerT46L3oBL-9pl3b2sbnVdB0g137ujtToGEi2~ZDx838-DEDHiiRWva6P5hsyzCefLCT2HHng-KWucTjJ58GVeqaNO6A6uQFCwECB12gz2y0rV9b3e-kU8o1PmFVPWHY4BPBQ1akr8~fBQny7XQ3ayGjk-JYour8e-tARSJB3Y3uGnaTgA8Rfg~stRf8OaBYptbQu7WkwtBdKrIg__" />
            </StyledLogo>
            <StyledNavButtons>
              <Button text="Registrarse" type="outlined" />
              <Button text="Iniciar sesion" />
            </StyledNavButtons>
          </StyledNavContent>
        </StyledNav>
        <StyledBanner>
          <StyledContentBanner>
            <StyledTextBanner>
              <h2>Empresa Profesional de Capacitaciones</h2>
              <p>¡Somos OIS y estamos comprometidos con las empresas que priorizan la seguridad!</p>
              <Button text="Inscribirme" type="yellow" />
            </StyledTextBanner>
            <StyledImageBanner>
              <img src="https://s3-alpha-sig.figma.com/img/cb4e/f5d3/2eadc9741b8713c62ab32e5108116307?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eA4EBvUoVgExQ3wtM9R27jFAMV5exZtq62mFAy~ippEcU9XnFK2UOc6NPDIljnFgZmrGGp6DmI7a9Y7x5Q~ZQ-2c0rP-18X0S45FwqtC-umGz-3xQSVTW4eSZYDp31tXXDp49f704HPlj47KDfUB1f16Gq6eFlbqlENIH4Ry8-QvOqOXqbGo16pce4NUvL7x7lWrEFTRskaXeROCXq6Qprw48iMBFg7Ax7NAqh7g83vY-xMZWck0anAzty8ZH1Qx1xk7nBzPWUvgF2n-yQSYtSdNG70PVzOJKySLE1Mo~CRfDLZLAsVsfjQ6gxcrsvJMBNnl6KAcY1jaqouBslwFyw__" />
            </StyledImageBanner>
          </StyledContentBanner>
        </StyledBanner>
      </StyledHeader>
      <StyledProgramsByFieldSection>
        <StyledHeadSection>
          <h3>Descubre programas por disciplina</h3>
          <Button text={'Ver todos las disciplinas'} size="lg" />
        </StyledHeadSection>
        <ProgramByFieldList />
      </StyledProgramsByFieldSection>
      <StyledProgramsByFieldSection>
        <StyledHeadSection>
          <h3>Programas recién agregados</h3>
          <Button text={'Ver todos los programas'} size="lg" />
        </StyledHeadSection>
        <NewPromgramList />
      </StyledProgramsByFieldSection>
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
    </StyledPrincipal>
  );
};

export default ProyectoOIS;
