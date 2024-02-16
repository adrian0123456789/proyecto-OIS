import styled from 'styled-components';
import Button from './common/button';
import ProgramByFieldList from './common/ProgramByFieldList';
import NewPromgramList from './common/NewProgramList';
import Banner from './common/Banner';

const StyledHomeView = styled.div`
  width: 100%;
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
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  h3 {
    font-size: 28px;
    font-weight: 600;
  }
  img {
    width: 29px;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    padding: 50px 20px;
    align-items: center;
    gap: 15px;
    h3 {
      font-size: 19px;
      font-weight: 500;
    }
  }
`;

const HomeView = () => {
  return (
    <StyledHomeView>
      <Banner />
      <StyledProgramsByFieldSection>
        <StyledHeadSection>
          <div>
            <img src="./icons/circle.svg" />
            <h3>Descubre programas por disciplina</h3>
          </div>
          <Button text={'Ver todos las disciplinas'} size="lg" icon="arrow" />
        </StyledHeadSection>
        <ProgramByFieldList />
      </StyledProgramsByFieldSection>
      <StyledProgramsByFieldSection>
        <StyledHeadSection>
          <div>
            <img src="./icons/circle.svg" />
            <h3>Programas recién agregados</h3>
          </div>
          <Button text={'Ver todos los programas'} size="lg" icon="arrow" />
        </StyledHeadSection>
        <NewPromgramList />
      </StyledProgramsByFieldSection>
    </StyledHomeView>
  );
};

export default HomeView;
