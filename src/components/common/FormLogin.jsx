import styled from 'styled-components';
import Button from './button';

const StyledLoginContainer = styled.div`
  max-width: 842px;
  height: 481px;
  display: flex;
  margin: 0 auto;
  border-radius: 6px;
  overflow: hidden;
`;
const StyledLoginContainerBanner = styled.div`
  background-color: #054580;
`;
const StyledLoginContainerBannerImages = styled.div`
  opacity: 24%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 15px;
  width: 436px;
  height: 481px;
  background-image: url('https://s3-alpha-sig.figma.com/img/e6aa/bf2d/430fbb5d1e7f1278387d46ccda56acc7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RdnrRNzzCXURW~Dk0YjZiUUMwYOKdA0-P6k-s0QSpFSQz3A9g46j8IWjQbaW52DY3ol8dg1tO3VCrdqb4C~ouju8DAMmeWS68qTTlPLPj~LvPX~N7hg-ak8DoKla7GF-nKdilLNvOynPD89NhgxJsllrcs1yqza-ew~HVOhz50v7-20reUWBSsOwx~r7T8YIV3ny3oKBRaQAeJuMPHR7ApdZH2CxMWTKGtzP9rBJi9JEgQKFGL4~7fjup0tfNcRukbAGgJWYdKjmoRUxbOmDGshraaZDwvj8BMs0aa3NvIBlLmx0C9p3zjqueGnfnLDhjlZTOLCr0N15tiwW5GmgKQ__');
  img {
    width: 25%;
  }
`;
const StyledLoginForm = styled.div`
  background-color: #f0f8ff;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const StyledLoginContainerForm = styled.div`
  padding: 30px 90px 0 60px;
  display: flex;
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    h2 {
      font-size: 24px;
      font-weight: 500;
    }
    label {
      font-size: 14px;
      font-weight: 300;
    }
    input {
      border-radius: 6px;
      border: 1px #d3d3d3 solid;
      padding: 5px;
    }
    a {
      display: flex;
      justify-content: flex-end;
      text-decoration: underline;
      font-size: 12px;
      font-weight: 300;
    }
  }
`;
const StyledCloseForm = styled.div`
  padding: 10px;
  img {
    width: 32px;
  }
`;
const StyledLoginContainerFormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormlLofin = () => {
  return (
    <StyledLoginContainer>
      <StyledLoginContainerBanner>
        <StyledLoginContainerBannerImages>
          <img src="https://s3-alpha-sig.figma.com/img/b0df/28d7/7937cdd175de1b75f441c7471b2166f5?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mq1XftoELkNZlqoE06aIE15KnkxMu-AI0XQOIZbLN8REITDrz0XppDEvfUGPn6dd28PMLNkPQbkqzRUdFWuT6bHF~njcZtViDOCV~1VWWMNiuZE-PCCEp1UfPc6zwnnVbwPq3FerT46L3oBL-9pl3b2sbnVdB0g137ujtToGEi2~ZDx838-DEDHiiRWva6P5hsyzCefLCT2HHng-KWucTjJ58GVeqaNO6A6uQFCwECB12gz2y0rV9b3e-kU8o1PmFVPWHY4BPBQ1akr8~fBQny7XQ3ayGjk-JYour8e-tARSJB3Y3uGnaTgA8Rfg~stRf8OaBYptbQu7WkwtBdKrIg__" />
        </StyledLoginContainerBannerImages>
      </StyledLoginContainerBanner>
      <StyledLoginForm>
        <StyledCloseForm>
          <img src="./icons/close.svg" />
        </StyledCloseForm>
        <StyledLoginContainerForm>
          <form>
            <h2>Adminitrador</h2>
            <StyledLoginContainerFormFields>
              <label>Usuario</label>
              <input></input>
            </StyledLoginContainerFormFields>
            <StyledLoginContainerFormFields>
              <label>Constraseña</label>
              <input></input>
            </StyledLoginContainerFormFields>
            <StyledLoginContainerFormFields>
              <a>Olvide mi constraseña</a>
              <Button text={'Iniciar sesion'} />
            </StyledLoginContainerFormFields>
          </form>
        </StyledLoginContainerForm>
      </StyledLoginForm>
    </StyledLoginContainer>
  );
};

export default FormlLofin;
