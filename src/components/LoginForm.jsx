import React, { useContext } from 'react';
import DataTable from '../components/DataTable';
import { users } from '../model/mock';
import { UserContext } from '../context/UserContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {


  const { setUser } = useContext(UserContext);
  const { setStatus } = useContext(UserContext);
  const { status } = useContext(UserContext);
  const navi = useNavigate();
  

  const handleSubmit = (e) => {



    e.preventDefault();
    setUser({
      username: e.target.username.value 
    });
    console.log('Password:', e.target.pass.value);
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === e.target.username.value && users[i].password === e.target.pass.value) {
       
        setStatus('connected');
        console.log('Connexion réussie');
        navi('/');
    
        
      }
      else {
        console.log('Connexion échouée');
       

      }
    }
  };
  return (
    <>
    {status !== 'connected' &&(
    <><div className="container">
          <form className="mt-3 mb-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label">Password</label>
              <input type="password" className="form-control" id="pass" />
            </div>

            <button type="submit" className="btn btn-primary">Envoyer</button>
            <div></div>
          </form>
        </div><DataTable /></>)}
        



        
        
      
    </>

  )
}

export default LoginForm