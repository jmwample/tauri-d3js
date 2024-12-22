import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Elements
import MenuBar from './components/MenuBar';

// Pages
import Home from './pages/Home';
import PieChart from './pages/PieChart';
import ForceDirected from './pages/ForceDirected';

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pie-chart" element={<PieChart />} />
            <Route path="/force-directed" element={<ForceDirected />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
