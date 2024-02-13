import styled from 'styled-components';
import Button from './button';

const StyledBanner = styled.div`
  background-image: url('https://s3-alpha-sig.figma.com/img/8f51/8fd5/80cc0b2e30b9961a6f1a11a9bbfdda70?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pnvOak4AUvV7ygS8IPvmilgFpkabnNURjFb9iIcvgC10yCAgTcv9XGCHMgGT~vuuASWzA9TRLj-hnAYYnJDoi9neuZlSOLMz2pfzd9-~Bc-ts5HAT0RSzFgrtpEZfuYl8kNa22nzxGGhrWIqEGlEwDbIhfkzukiqpfCybtgZNE4QCSoepNcmPqanfT4hIevBbL-eCFByUi0WvST4rhQAqzrN~Zii1n-65Yhv7FJj~SfvsRKFWJIQ6KCkrtbBe9TQ82jmVWP-FGgftMZbrNc025WSfaAFj~t4PdzwiJsuZoSAjf4XW5Slt-vYKamNMaYcGrvDHiSFC3INt9FrtQQ7yQ__');
  width: 100%;
  color: #1f1d44;
`;
const StyledContentBanner = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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

const Banner = () => (
  <StyledBanner>
    <StyledContentBanner>
      <StyledTextBanner>
        <h2>Empresa Profesional de Capacitaciones</h2>
        <p>¡Somos OIS y estamos comprometidos con las empresas que priorizan la seguridad!</p>
        <Button text="Inscribirme" type="yellow" icon="arrow" />
      </StyledTextBanner>
      <StyledImageBanner>
        <img src="https://s3-alpha-sig.figma.com/img/cb4e/f5d3/2eadc9741b8713c62ab32e5108116307?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eA4EBvUoVgExQ3wtM9R27jFAMV5exZtq62mFAy~ippEcU9XnFK2UOc6NPDIljnFgZmrGGp6DmI7a9Y7x5Q~ZQ-2c0rP-18X0S45FwqtC-umGz-3xQSVTW4eSZYDp31tXXDp49f704HPlj47KDfUB1f16Gq6eFlbqlENIH4Ry8-QvOqOXqbGo16pce4NUvL7x7lWrEFTRskaXeROCXq6Qprw48iMBFg7Ax7NAqh7g83vY-xMZWck0anAzty8ZH1Qx1xk7nBzPWUvgF2n-yQSYtSdNG70PVzOJKySLE1Mo~CRfDLZLAsVsfjQ6gxcrsvJMBNnl6KAcY1jaqouBslwFyw__" />
      </StyledImageBanner>
    </StyledContentBanner>
  </StyledBanner>
);

export default Banner;
