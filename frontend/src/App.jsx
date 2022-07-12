// Tools
import { Route, Routes } from "react-router-dom";

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

// Styling
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
