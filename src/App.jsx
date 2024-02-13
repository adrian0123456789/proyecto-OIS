import FormCopy from './components/FormCopy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListCard from './components/ListCard';
import Tictac from './components/Tictac';
import Buscador from './components/Buscador';
import HomeView from './components/HomeView';
import Login from './components/common/Login';
import Admin from './components/common/Admin';
import Layout from './components/common/Layout';
import { ProgramsView } from './components/ProgramsView';
import { ProgramDetailView } from './components/ProgramDetailView';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <StyledNav>
          <Link to="/">Home</Link>
          <Link to="/card">Card</Link>
          <Link to="/tictac">TicTacTo</Link>
          <Link to="/search">Buscador</Link>
          <Link to="/chamba">Proyecto OIS</Link>
        </StyledNav> */}
        {/* <main style={{ padding: '12px' }}>
      
        </main> */}
        <Routes>
          <Route path="/" element={<FormCopy />} />
          <Route path="/card" element={<ListCard />} />
          <Route path="/tictac" element={<Tictac />} />
          <Route path="/search" element={<Buscador />} />
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<HomeView />} />
            <Route path="programs" element={<ProgramsView />} />
            <Route path="programs/:programId" element={<ProgramDetailView />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
