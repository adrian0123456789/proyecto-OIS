import styled from 'styled-components';
import Button from './button';

const StyledNewProgram = styled.div`
  border: 1px #07b7ce solid;
  border-radius: 12px;
  overflow: hidden;
  width: 250px;
  img {
    width: 100%;
    height: 140px;
  }
`;
const StyledNewProgramTitle = styled.div`
  text-align: center;
  background-color: #08c7fd;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 5px;
`;
const StyledNewProgramContent = styled.div`
  padding: 8px;
`;
const StyledNewProgramTextInfo = styled.div`
  color: #1f1d44;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
const StyledNewProgramPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  p {
    font-weight: 700;
    font-size: 20px;
  }
`;
const StyledNewProgramDuration = styled.div`
  background-color: #f4f4f4;
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 13px;
    height: 13px;
  }
`;
const StyledNewProgramAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  a {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const StyledNewProgramFooter = styled.div`
  text-align: center;
  background-color: #edfbff;
  color: #1f1d44;
  font-weight: 500;
  font-size: 14px;
  padding: 5px;
`;
const NewProgram = ({ program }) => {
  return (
    <StyledNewProgram>
      <StyledNewProgramTitle>{program.title}</StyledNewProgramTitle>
      <StyledNewProgramContent>
        <img src={program.img} />
        <StyledNewProgramTextInfo>{program.info}</StyledNewProgramTextInfo>
        <StyledNewProgramPrice>
          <StyledNewProgramDuration>
            <img src="./icons/clock.svg" />
            {program.duration}
          </StyledNewProgramDuration>
          <p>S/.{program.price}</p>
        </StyledNewProgramPrice>
        <StyledNewProgramAction>
          <Button text="Inscribirme" type="yellow" size="sm" fontWigth="admin" font="md">
            Inscribirme
          </Button>
          <a>Ver más</a>
        </StyledNewProgramAction>
      </StyledNewProgramContent>
      <StyledNewProgramFooter>
        <p>{program.cargo}</p>
      </StyledNewProgramFooter>
    </StyledNewProgram>
  );
};
export default NewProgram;
