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
  h3 {
    font-size: 28px;
    font-weight: 600;
  }
`;

const HomeView = () => {
  return (
    <StyledHomeView>
      <Banner />
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
    </StyledHomeView>
  );
};

export default HomeView;
