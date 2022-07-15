// -- components --
import Header from "./components/Header";

import PrivateRoute from "./utils/PrivateRoute";

// -- State Management --
import { AuthProvider } from "./context/AuthContext";

// Styling
import "./App.css";

// App
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <PrivateRoute />
      </AuthProvider>
    </div>
  );
}

export default App;
