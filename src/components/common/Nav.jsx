import styled from 'styled-components';
import Button from './button';

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
  @media (max-width: 450px) {
    padding: 5px;
    width: 200px;
  }
`;
const StyledNavButtons = styled.div`
  display: flex;
  gap: 12px;
  padding: 17px;
  @media (max-width: 450px) {
    display: none;
  }
`;

const Nav = () => (
  <div>
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
  </div>
);
export default Nav;
