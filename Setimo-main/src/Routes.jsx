import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Expectador from "./pages/Expectador";
import Produtor from "./pages/Produtor";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Apresentacao from "./pages/Apresentacao";
import CriarFilme from "./pages/CriarFilmes";
import Teams from "./pages/Teams";
import Error from "./pages/Error";
import Pagamento from "./pages/Pagamento";
import AssistirFilme from "./pages/AssistirFilme"
import Plano from "./pages/Plano"
import AlugarFilme from "./pages/AlugarFilme"
import { UserPreferencesProvider } from "./context/UserPreferencesContext";
 
 
function AppRoutes() {
  return (
    <BrowserRouter>
    <UserPreferencesProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/perfil" element={<Expectador />} />
        <Route path="/produtor" element={<Produtor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Apresentacao />} />
        <Route path="/criarFilmes" element={<CriarFilme />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/assistirFilme/:id" element={<AssistirFilme />} />
        <Route path="/plano" element={<Plano />}/>
        <Route path="/error" element={<Error />} />
        <Route path="/alugarFilme" element={<AlugarFilme />} />
        <Route path="*" element={<Navigate to="/error" />} />
        

      </Routes>
      </UserPreferencesProvider>
    </BrowserRouter>
  );
}
 
export default AppRoutes