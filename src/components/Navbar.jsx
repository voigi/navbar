import React, { useContext, useEffect ,useState} from 'react'
import { UserContext } from '../context/UserContext';
import Switch from '../components/Switch';
//import '../App.js';


const Navbar = () => {


  const { user } = useContext(UserContext);
  const { status } = useContext(UserContext);



  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>

       { user && status === 'connected' && <span>Bonjour {user.username}</span>}

          {/* <Switch /> */}
       
     
       {status === 'connected' ? <a href="/login"><button class="btn btn-outline-primary">Déconnexion</button></a> : <a href="/login"><button class="btn btn-outline-primary">Connexion</button></a>}
      </div>
    </nav>
  )
}

export default Navbar