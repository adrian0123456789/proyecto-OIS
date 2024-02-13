import FormCopy from './components/FormCopy';
import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';
import ListCard from './components/ListCard';
import styled from 'styled-components';
import Tictac from './components/Tictac';
import Buscador from './components/Buscador';
import ProyectoOIS from './components/ProyectoOIS';
import Login from './components/common/Login';
import Admin from './components/common/Admin';

const StyledNav = styled.nav`
  width: 100%;
  background-color: #40a8ae;
  display: flex;
  justify-content: space-evenly;
  padding: 15px 0;
  a {
    color: white;
    font-size: 25px;
  }
`;
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
          <Route path="/chamba" element={<ProyectoOIS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
