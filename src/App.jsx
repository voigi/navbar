import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Homepage from "./pages/Homepage";
import { UserProvider } from "./context/UserContext";
import { AdminProvider } from "./context/AdminContext";
import Profil from "./pages/Profil";
import NoMatch from "./components/NoMatch";
import Tournoi from "./pages/Tournoi";
import Connect from "./pages/Connecté";

function App() {
  return (
    <AdminProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/tournoi" element={<Tournoi />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AdminProvider>
  );
}

export default App;
