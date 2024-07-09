
import './App.css';



import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './components/LoginForm';
import Homepage from './pages/Homepage';
import { UserProvider } from './context/UserContext';




function App() {



  return (

    
  
    <UserProvider>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginForm />} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
   
  


  );


}

export default App
