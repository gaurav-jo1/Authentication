// Tools
import { Route, Routes } from "react-router-dom";

// -- components --
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import User from "./utils/User";

import { AuthProvider } from "./context/AuthContext";

// Styling
import "./App.css";

// App
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Header />
        <Routes>
          <Route path="/" element={User ? <HomePage /> : <LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
