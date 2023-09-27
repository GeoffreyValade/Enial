import './App.css';
import { Routes, Route } from "react-router-dom"

import Rules from "./components/Rules/Rules"
import Magicrules from "./components/Magicrules/Magicrules"
import Oeil from "./components/Oeil/Oeil"
import Characters from "./components/Characters/Characters"
import Fiche from "./components/Fiche/Fiche"
import Party from "./components/Party/Party"

import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <Navbar />
        <Routes>
          <Route path="/rules" element={<Rules />} />
          <Route path="/magicrules" element={<Magicrules />} />
          <Route path="/oeil" element={<Oeil />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<Fiche />} />
          <Route path="/party" element={<Party />} />
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