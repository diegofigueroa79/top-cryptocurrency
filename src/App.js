import { Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:slug/:symbol/' element={<Detail />} />
    </Routes>
  );
}

export default App;
