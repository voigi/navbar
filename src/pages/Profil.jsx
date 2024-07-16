import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { Container, Row, Col, Image, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Bouton from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Profil = () => {
  const { user } = useContext(UserContext);
  const { status } = useContext(UserContext);
   
console.log(user);
console.log(user.tournoi);
console.log(user.snookerFavoriteGames);

  const navi = useNavigate();

  const backHome = () => {
    navi('/');
  };
  const returnlogin =() => {
    navi('/login');
  };

  useEffect(() => {
    if (user.avatar === undefined) {
      returnlogin();
    }
  }, [user]);

console.log(user.avatar);

  return (
   
    // <div className="container">
    //   <h3 className="text-center">Profil:</h3>
    //   <div className="card bg-light p-4 shadow">
    //     <h2 className="mb-4">Nom: {user.username}</h2>
    //     <h2>Prénom:</h2>
    //     <h2>Email: {user.email}</h2>
    //     <h2>Date de naissance:</h2>
    //     <h2>Date d'inscription:</h2>
    //     <h2>Mot de passe:</h2>
    //   </div>
    // </div>
    <Container className="mt-5">

 <h3 className="text-center">Mon Profil</h3>
      <div className='card bg-light p-4 shadow'>


            <Row  >
      
      <Col className='d-flex justify-content-center'>

        <Image src={user.avatar} alt="Avatar" roundedCircle width="200"  className='shadow' />
       
      </Col>
      <Row>
        <Col className="d-flex justify-content-center">
          <h2>{user.username}</h2>
        </Col>
        
      </Row>
    </Row>

    <Row className="mt-3">
      <Col>

      
      
        <Stack direction="horizontal">
          <a href="https://www.linkedin.com/in/johndoe/" className="me-2">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/johndoe" className="me-2">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:johndoe@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </Stack>
      </Col>
    </Row>


    <Row className="mt-4">
      <Col>
        <h3>Compétences</h3>
        <ul>


          <li>Tournoi: {user && status === 'connected' && user.tournoi === true ? <Badge bg="success">Oui</Badge> : <Badge bg="danger">Non</Badge>}</li>
        
          
          <li><span>Billard Favoris: </span> 
            
              {user && status === 'connected' &&
                user.snookerFavoriteGames.map((game, index) => (
                  <Badge className='me-1' bg="secondary" key={index}>{game}</Badge>
                ))
              }
              
              
          

           
            </li>

           {
      
          }
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </Col>
    </Row>
      </div>

       <div className="mt-3">

       

        <Bouton className="btn btn-primary" onClick={() => backHome() }>Retour</Bouton>
       </div>
  </Container>
  );
}

export default Profil;

