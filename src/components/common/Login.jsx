import styled from 'styled-components';
import FormlLofin from './FormLogin';

const StyledLogin = styled.div`
  background-color: #deefff;
  width: 100%;
  min-height: 100vh;
  padding: 130px 0;
`;

const Login = () => {
  return (
    <StyledLogin>
      <FormlLofin />
    </StyledLogin>
  );
};
export default Login;
