import styled from 'styled-components';

const StyledProgramByField = styled.div`
  max-width: 1440px;
  border: 1px #08c7fd solid;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 200px;
  height: 200px;
  gap: 28px;
  img {
    width: 79px;
    height: 78px;
  }
  p {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
  }
`;

const ProgramByField = ({ img, name }) => {
  return (
    <StyledProgramByField>
      <img src={img} />
      <p>{name}</p>
    </StyledProgramByField>
  );
};

export default ProgramByField;
