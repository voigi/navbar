import React, { useContext, useEffect ,useState} from 'react'
import { UserContext } from '../context/UserContext';
import Switch from '../components/Switch';
import { useNavigate } from 'react-router-dom';
//import '../App.js';


const Navbar = () => {

  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { status } = useContext(UserContext);
  const { setStatus } = useContext(UserContext);
  const { setLogout } = useContext(UserContext);



  const handleLogout = () => {
    setStatus('deconnected');
    setLogout('annonymous');
    navigate('/');
  }


  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>

       { user && status === 'connected' && <span>Bonjour {user.username}</span>}

          {/* <Switch /> */}
       
     
       {status === 'connected' ? <button class="btn btn-outline-danger"  onClick={() => {
       handleLogout();
      }}>Déconnexion</button> : <a href="/login"><button class="btn btn-outline-primary">Connexion</button></a>}
      </div>
    </nav>
  )
}

export default Navbar