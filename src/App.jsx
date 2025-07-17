import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PracticeDetails from './pages/PracticeDetails';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/practices/:id" element={<PracticeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

