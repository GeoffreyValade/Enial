import './App.css';
import { Routes, Route } from "react-router-dom"

import TechnicsRules from "./components/TechnicsRules/TechnicsRules"
import SpellRules from "./components/SpellRules/SpellRules"
import ShowSpell from "./components/SpellRules/ShowSpell"
import Characters from "./components/Characters/Characters"
import Fiche from "./components/Fiche/Fiche"
import Page from "./components/Logs/Page"
import Signup from "./components/Logs/Signup"

import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <Navbar />
        <Routes>
          <Route path="/techniques" element={<TechnicsRules />} />
          <Route path="/sorts" element={<SpellRules />} />
          <Route path="/sorts/:id" element={<ShowSpell />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:charId" element={<Fiche />} />
          <Route path="/login" element={<Page />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;


//   <Link to="/rules">Règles : générales</Link>
//   <Link to="/magicrules">Règles : Magie des arcanes</Link>
//   <Link to="/oeil">L'Oeil de la tempête</Link>
//   <Link to="/characters">Personnage</Link>
//   <Link to="/party">Le groupe</Link>