import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonsList from "./pages/PokemonsList";
import PokemonPage from "./pages/PokemonPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Routes>
    </Router>
  );
};

export default App;
