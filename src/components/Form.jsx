import { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
  width: 500px;
  margin: 0 auto;
  background-color: #825172;
  padding: 100px;
  h1 {
    text-align: center;
  }
`;
const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin: 0 auto;
`;

const StyledCamp = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  border-radius: 3px;
  margin-top: 20px;
  border: none;
`;
const StyledBtn = styled.button`
  background-color: #63c3af;
  color: white;
  width: 100%;
`;
const StyledExtra = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
  label,
  a {
    display: block;
  }
`;
const StyledSpan = styled.span`
  color: #ec7373;
`;

const Form = () => {
  const [text, setText] = useState({ email: '', password: '' });
  // const [error, setError] = useState({ email: false, password: false });

  const handleEmail = e => {
    setText({ ...text, email: e.target.value });
  };
  const handlePassword = e => {
    setText({ ...text, password: e.target.value });
  };

  const validateEmail = () => {
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!patronEmail.test(text.email)) {
    //   setError({ ...error, email: true });
    // } else setError({ ...error, email: false });
    return patronEmail.test(text.email);
  };
  const validatePassword = () => {
    const patronPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    return patronPassword.test(text.password);
  };

  console.log(validateEmail());
  return (
    <StyledForm>
      <h1>Login</h1>
      <StyledData>
        <StyledCamp value={text.email} onChange={handleEmail} placeholder="Correo"></StyledCamp>
        {!validateEmail() && <StyledSpan>Ingrese un correo valido</StyledSpan>}
        <StyledCamp value={text.password} onChange={handlePassword} placeholder="Constrasenia"></StyledCamp>
        {!validatePassword() && <StyledSpan>Ingrese una Constrasenia valida</StyledSpan>}
        <StyledExtra>
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a>Forgot?</a>
        </StyledExtra>
        <StyledBtn>Submit</StyledBtn>
      </StyledData>
    </StyledForm>
  );
};

export default Form;
