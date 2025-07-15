import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import InfiniteScrollPage from './pages/InfiniteScrollPage';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/infinite-scroll">Infinite Scroll</Link>
      </nav>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/infinite-scroll" element={<InfiniteScrollPage />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
