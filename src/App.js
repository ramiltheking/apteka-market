import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PharPage } from './pages/PharPage';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list_phar" element={<PharPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
