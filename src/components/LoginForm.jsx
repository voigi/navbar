import React, { useContext , useState,useRef } from 'react';
import DataTable from '../components/DataTable';
import { users } from '../model/mock';
import { UserContext } from '../context/UserContext';
import Button from 'react-bootstrap/Button';
import Eye from '../components/Eye';
import Form from 'react-bootstrap/Form';


import { useNavigate } from 'react-router-dom';


const LoginForm = () => {

  const passwordInputRef = useRef(null);
  const { setUser } = useContext(UserContext);
  const { setStatus } = useContext(UserContext);
  const { status } = useContext(UserContext);
  const navi = useNavigate();
  const [validated, setValidated] = useState(false);
 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      username: e.target.username.value,
      email: users.find((user) => user.username === e.target.username.value).email,
      avatar: users.find((user) => user.username === e.target.username.value).avatar,
      tournoi: users.find((user) => user.username === e.target.username.value).tournoi,
      birthdate: users.find((user) => user.username === e.target.username.value).birthdate,
      registeredAt: users.find((user) => user.username === e.target.username.value).registeredAt,
      snookerFavoriteGames: users.find((user) => user.username === e.target.username.value).snookerFavoriteGames,
      team: users.find((user) => user.username === e.target.username.value).team,
      
        
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
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>

    {status !== 'connected' &&( 
    <><h2 className='text-center'>Page de connexion</h2><><div className="container mb-5 mt-5" style={{ backgroundColor: '#f8f9fa' ,borderRadius: '10px', padding: '20px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>



            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" id='username' required />
            <Form.Control.Feedback type="invalid">
              Entrez un nom d'utilisateur valide.
            </Form.Control.Feedback>


            <Form.Label>Password</Form.Label>


            <Form.Control className='mb-3' type="password" placeholder="Mot de Passe" id='pass' pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$' required />







            <Form.Control.Feedback type="invalid">
              Entrez un mot de passe valide.
            </Form.Control.Feedback>






            <Button className='mb-3' variant="primary" type="submit">Envoyer</Button>
          </Form>
        </div><DataTable /></></>)}
        



        
        
      
    </>

  )
}

export default LoginForm