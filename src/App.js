
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PaginaDois from './pages/PaginaDois';
import PaginaTres from './pages/PaginaTres';
import PaginaQuatro from './pages/PaginaQuatro';
import PaginaCinco from './pages/PaginaCinco';
import HomemAranha from './pages/HomemAranha';
import HomemFerro from './pages/HomemFerro';
import Wolverine from './pages/Wolverine';
import CapitaoAmerica from './pages/capitaoAmerica';
import YourTeam from './pages/YourTeam';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/PaginaDois' element={<PaginaDois />} />
        <Route path='/PaginaTres' element={<PaginaTres />} />
        <Route path='/PaginaQuatro' element={<PaginaQuatro />} />
        <Route path='/PaginaCinco' element={<PaginaCinco />} />
        <Route path='/HomemAranha' element={<HomemAranha />} />
        <Route path='/HomemFerro' element={<HomemFerro />} />
        <Route path='/Wolverine' element={<Wolverine />} />
        <Route path='/CapitaoAmerica' element={<CapitaoAmerica />} />
        <Route path='/YourTeam' element={<YourTeam />} />
      </Routes>
    </Router>

  );
}

export default App;
