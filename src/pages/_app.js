// src/pages/app.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Upload from './Upload';
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
