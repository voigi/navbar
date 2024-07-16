
import './App.css';



import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './components/LoginForm';
import Homepage from './pages/Homepage';
import { UserProvider } from './context/UserContext';
import Profil from './pages/Profil';
import NoMatch from './components/NoMatch';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';






function App() {




  return (

    
  
    <UserProvider>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/login" element={<LoginForm />} />
          
          <Route path="/profil" element={<Profil />} /> 
      
         


        </Routes>
      </BrowserRouter>
    </UserProvider>
   
  


  );


}

export default App
