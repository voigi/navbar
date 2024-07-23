import React, { useContext} from 'react'
import { UserContext } from '../context/UserContext';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const {admin} = useContext(AdminContext);
  const { status } = useContext(UserContext);
  const { setStatus } = useContext(UserContext);
  const { setLogout } = useContext(UserContext);

  console.log(user);

  const handleLogout = () => {
    setStatus('deconnected');
    setLogout('annonymous');
    navigate('/');
  }


  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>

       { user && status === 'connected' && <span>Bonjour {user.username}</span>}
       { admin && status === 'connected' && <span>Bonjour Admin</span>}

     
       
       {admin && status === 'connected' && <a class="position-absolute top-0 end-0 mt-2" style={{marginRight: '9rem'}} onClick={() => navigate('/tournoi')}><button class="btn btn-outline-primary">Admin</button></a>}
       {user && status === 'connected' && <a class="position-absolute top-0 end-0 mt-2" style={{marginRight: '9rem'}} onClick={() => navigate('/profil')}><button class="btn btn-outline-primary">Profil</button></a>}
       {status === 'connected' ? <button class="btn btn-outline-danger"  onClick={() => {
       handleLogout();
      }}>Déconnexion</button> : <a href="/login"><button class="btn btn-outline-primary">Connexion</button></a>}
      </div>
    </nav>
  )
}

export default Navbar