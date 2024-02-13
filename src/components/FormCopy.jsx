import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const StyledForm = styled.form`
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

const FormCopy = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  console.log('kaka', watch('email'));
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <StyledData>
        <StyledCamp {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Correo"></StyledCamp>
        {errors.email && <StyledSpan>Ingrese un correo valido</StyledSpan>}
        <StyledCamp
          {...register('password', { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/ })}
          placeholder="Constrasenia"
        ></StyledCamp>
        {errors.password && <StyledSpan>Ingrese una Constrasenia valida</StyledSpan>}
        <StyledExtra>
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a>Forgot?</a>
        </StyledExtra>
        <StyledBtn type="submit">Submit</StyledBtn>
      </StyledData>
    </StyledForm>
  );
};

export default FormCopy;
