import { GlobalStyle } from "./GlobalCss.styled"; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import FilmePage from "./pages/Filme";
import PlanetaPage from "./pages/Planeta";
import EspeciePage from "./pages/Especie";
import EspaconavePage from "./pages/Espaconave";
import VeiculoPage from "./pages/Veiculo";
import PersonagemPage from "./pages/Personagem";

function Layout({ children }) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header/>}
      {children}
    </>
  );
}

function App() {
  return (
    <>
      <GlobalStyle /> 
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="filmes" element={<FilmePage />} />
            <Route path="personagens" element={<PersonagemPage />} />
            <Route path="planetas" element={<PlanetaPage />} />
            <Route path="especies" element={<EspeciePage />} />
            <Route path="espaconaves" element={<EspaconavePage />} />
            <Route path="veiculos" element={<VeiculoPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;